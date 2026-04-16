import { useEffect } from 'react';
import { X } from 'lucide-react';
import clsx from 'clsx';

const sizes = {
  sm:   'max-w-sm',
  md:   'max-w-md',
  lg:   'max-w-lg',
  xl:   'max-w-xl',
  full: 'max-w-4xl',
};

function Modal({
  isOpen,
  onClose,
  title,
  size = 'md',
  children,
  footer,
  closeOnOverlayClick = true,
}) {
  // Lock body scroll when modal is open + handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // prevent background scroll

    // Cleanup runs when isOpen becomes false or component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Render nothing when closed — keeps DOM clean
  if (!isOpen) return null;

  return (
    // Overlay — fixed covers entire viewport, z-50 above everything
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Modal panel — relative z-10 to appear above backdrop */}
      <div className={clsx(
        'relative z-10 w-full bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl',
        'flex flex-col max-h-[90vh]',
        sizes[size]
      )}>
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
            <h2 className="text-white font-semibold text-lg">{title}</h2>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-gray-700 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;