import { default as hotToast, Toaster as HotToaster } from 'react-hot-toast';

// Wrapper that enforces consistent styling across all 20 projects
// Usage: toast.success("Done!") | toast.error("Failed") | toast.loading("...") | toast.info("Note")

const toastStyles = {
  style: {
    background: '#1f2937',
    color: '#f9fafb',
    border: '1px solid #374151',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
  },
};

export const toast = {
  success: (message) => hotToast.success(message, {
    ...toastStyles,
    iconTheme: { primary: '#22c55e', secondary: '#1f2937' },
  }),
  error: (message) => hotToast.error(message, {
    ...toastStyles,
    iconTheme: { primary: '#ef4444', secondary: '#1f2937' },
  }),
  loading: (message) => hotToast.loading(message, toastStyles),
  info: (message) => hotToast(message, {
    ...toastStyles,
    icon: 'ℹ️',
  }),
  dismiss: hotToast.dismiss,
};

// Drop this once in App.jsx — toasts render globally from anywhere in the app
export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{ duration: 4000 }}
    />
  );
}