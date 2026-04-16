import clsx from 'clsx';

const variants = {
  success: 'bg-green-500/15 text-green-400 border-green-500/20',
  warning: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
  error:   'bg-red-500/15 text-red-400 border-red-500/20',
  info:    'bg-blue-500/15 text-blue-400 border-blue-500/20',
  neutral: 'bg-gray-500/15 text-gray-400 border-gray-500/20',
};

const dotColors = {
  success: 'bg-green-400',
  warning: 'bg-yellow-400',
  error:   'bg-red-400',
  info:    'bg-blue-400',
  neutral: 'bg-gray-400',
};

const sizes = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
};

function Badge({
  variant = 'neutral',
  size = 'sm',
  dot = false,
  children,
  className,
}) {
  return (
    <span className={clsx(
      'inline-flex items-center gap-1.5 font-medium rounded-full border',
      variants[variant],
      sizes[size],
      className
    )}>
      {dot && (
        <span className={clsx(
          'w-1.5 h-1.5 rounded-full',
          dotColors[variant]
        )} />
      )}
      {children}
    </span>
  );
}

export default Badge;