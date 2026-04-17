import { useState } from 'react';
import { Button, Card, Badge, Spinner, FileUpload, Modal, toast } from '../components/ui';

function ComponentDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const simulateLoading = () => {
    setLoadingBtn(true);
    setTimeout(() => setLoadingBtn(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          Component <span className="text-blue-500">Library</span>
        </h1>
        <p className="text-gray-400">All reusable UI components — used across all 20 projects</p>
      </div>

      {/* Buttons */}
      <section>
        <h2 className="text-white text-xl font-bold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-3 mb-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button loading={loadingBtn} onClick={simulateLoading}>
            {loadingBtn ? 'Loading...' : 'Click to Load'}
          </Button>
          <Button disabled>Disabled</Button>
          <Button variant="primary" fullWidth>Full Width</Button>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-white text-xl font-bold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="success" dot>Success</Badge>
          <Badge variant="warning" dot>Warning</Badge>
          <Badge variant="error" dot>Error</Badge>
          <Badge variant="info" dot>Info</Badge>
          <Badge variant="neutral" dot>Neutral</Badge>
          <Badge variant="success" size="md">Large Badge</Badge>
        </div>
      </section>

      {/* Spinners */}
      <section>
        <h2 className="text-white text-xl font-bold mb-4">Spinners</h2>
        <div className="flex items-center gap-6">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
          <Spinner size="md" color="white" />
          <Spinner size="md" color="gray" />
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-white text-xl font-bold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Small Padding" subtitle="padding='sm'" padding="sm">
            <p className="text-gray-400 text-sm">Card body content goes here.</p>
          </Card>
          <Card title="Medium Padding" subtitle="padding='md'" padding="md">
            <p className="text-gray-400 text-sm">Card body content goes here.</p>
          </Card>
          <Card
            title="With Footer"
            subtitle="footer prop"
            footer={<Button size="sm">Action</Button>}
          >
            <p className="text-gray-400 text-sm">Card with footer action button.</p>
          </Card>
        </div>
      </section>

      {/* File Upload */}
      <section>
        <h2 className="text-white text-xl font-bold mb-4">File Upload</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-2">Image upload (with preview)</p>
            <FileUpload
              accept="image/*"
              maxSizeMB={5}
              preview={true}
              label="Drop image here or click to upload"
              onFileSelect={(f) => f && toast.success(`Image selected: ${f.name}`)}
              onError={(e) => toast.error(e)}
            />
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">PDF upload</p>
            <FileUpload
              accept=".pdf"
              maxSizeMB={10}
              preview={false}
              label="Drop PDF here or click to upload"
              onFileSelect={(f) => f && toast.success(`PDF selected: ${f.name}`)}
              onError={(e) => toast.error(e)}
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      <section>
        <h2 className="text-white text-xl font-bold mb-4">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Example Modal"
          size="md"
          footer={
            <>
              <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => { setModalOpen(false); toast.success('Confirmed!'); }}>
                Confirm
              </Button>
            </>
          }
        >
          <p className="text-gray-400 text-sm">
            This modal supports Escape key to close, overlay click to close,
            body scroll lock, and size variants. Used for confirmations, detail views,
            and form overlays across all 20 projects.
          </p>
          <div className="flex gap-2 mt-4">
            <Badge variant="success" dot>Active</Badge>
            <Badge variant="info">React Router</Badge>
          </div>
        </Modal>
      </section>

      {/* Toast */}
      <section>
        <h2 className="text-white text-xl font-bold mb-4">Toast Notifications</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" onClick={() => toast.success('Analysis complete!')}>
            Success Toast
          </Button>
          <Button variant="danger" onClick={() => toast.error('Upload failed!')}>
            Error Toast
          </Button>
          <Button variant="secondary" onClick={() => toast.loading('Processing...')}>
            Loading Toast
          </Button>
          <Button variant="ghost" onClick={() => toast.info('Report ready to download')}>
            Info Toast
          </Button>
          <Button variant="ghost" onClick={() => toast.dismiss()}>
            Dismiss All
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ComponentDemo;