import clsx from 'clsx';

const sizes = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-[3px]',
  xl: 'w-12 h-12 border-4',
};

const colors = {
  primary: 'border-blue-900 border-t-blue-500',
  white:   'border-white/20 border-t-white',
  gray:    'border-gray-700 border-t-gray-400',
};

function Spinner({ size = 'md', color = 'primary', className }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={clsx(
        'rounded-full animate-spin',
        sizes[size],
        colors[color],
        className
      )}
    />
  );
}

export default Spinner;