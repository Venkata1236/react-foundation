import { forwardRef } from 'react';
import clsx from 'clsx';
import Spinner from './Spinner';

// forwardRef lets parent components pass a ref to the button DOM element.
// Needed when parent wants to auto-focus the button or measure its position.
const Button = forwardRef(({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  children,
  className,
}, ref) => {

  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900';

  const variants = {
    primary:   'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 focus:ring-blue-500',
    danger:    'bg-red-600 hover:bg-red-500 active:bg-red-700 text-white focus:ring-red-500',
    ghost:     'bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-gray-500',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2.5',
    lg: 'text-base px-6 py-3',
  };

  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        isDisabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {loading && (
        <Spinner
          size="sm"
          color={variant === 'secondary' || variant === 'ghost' ? 'primary' : 'white'}
        />
      )}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;