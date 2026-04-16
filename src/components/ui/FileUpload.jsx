import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, FileText, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

function FileUpload({
  accept,
  maxSizeMB = 10,
  multiple = false,
  onFileSelect,
  onError,
  preview = true,
  label = 'Drop file here or click to upload',
}) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);

  const maxBytes = maxSizeMB * 1024 * 1024;

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // Handle rejected files — wrong type or too large
    if (rejectedFiles.length > 0) {
      const reason = rejectedFiles[0].errors[0].code;
      const message =
        reason === 'file-too-large'
          ? `File too large. Max size is ${maxSizeMB}MB`
          : `File type not accepted`;
      setError(message);
      onError?.(message);
      return;
    }

    const selectedFile = acceptedFiles[0];
    setError(null);
    setFile(selectedFile);
    onFileSelect?.(selectedFile);

    // Generate image preview only for image files
    if (preview && selectedFile.type.startsWith('image/')) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  }, [maxSizeMB, onFileSelect, onError, preview]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept ? { [accept]: [] } : undefined,
    maxSize: maxBytes,
    multiple,
  });

  const handleClear = (e) => {
    // Stop propagation so click doesn't re-open file picker
    e.stopPropagation();
    setFile(null);
    setPreviewUrl(null);
    setError(null);
    onFileSelect?.(null);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={clsx(
          'relative border-2 border-dashed rounded-xl p-6 cursor-pointer transition-all duration-200',
          'flex flex-col items-center justify-center text-center min-h-[160px]',
          isDragActive
            ? 'border-blue-500 bg-blue-500/10'
            : file
            ? 'border-green-500 bg-green-500/5'
            : error
            ? 'border-red-500 bg-red-500/5'
            : 'border-gray-600 hover:border-gray-500 bg-gray-800/50 hover:bg-gray-800'
        )}
      >
        <input {...getInputProps()} />

        {/* Clear button — only shown when file is selected */}
        {file && (
          <button
            onClick={handleClear}
            aria-label="Remove file"
            className="absolute top-3 right-3 text-gray-500 hover:text-red-400 transition-colors"
          >
            <X size={16} />
          </button>
        )}

        {/* Image preview */}
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="max-h-32 max-w-full rounded-lg object-contain mb-3"
          />
        ) : file ? (
          // Non-image file info
          <div className="flex flex-col items-center gap-2">
            <FileText size={32} className="text-blue-400" />
            <span className="text-white text-sm font-medium">{file.name}</span>
            <span className="text-gray-500 text-xs">{formatFileSize(file.size)}</span>
          </div>
        ) : (
          // Empty state
          <div className="flex flex-col items-center gap-3">
            <Upload size={28} className={isDragActive ? 'text-blue-400' : 'text-gray-500'} />
            <div>
              <p className="text-gray-300 text-sm font-medium">{label}</p>
              <p className="text-gray-500 text-xs mt-1">Max {maxSizeMB}MB</p>
            </div>
          </div>
        )}

        {/* Success indicator */}
        {file && !previewUrl && (
          <CheckCircle size={16} className="text-green-400 mt-2" />
        )}
      </div>

      {/* Inline error message */}
      {error && (
        <p className="text-red-400 text-xs mt-2">⚠️ {error}</p>
      )}
    </div>
  );
}

export default FileUpload;