import clsx from 'clsx';

const paddings = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-lg',
  lg: 'shadow-xl',
};

function Card({
  title,
  subtitle,
  footer,
  padding = 'md',
  shadow = 'md',
  className,
  children,
}) {
  return (
    <div className={clsx(
      'bg-gray-800 border border-gray-700 rounded-2xl transition-all duration-200',
      paddings[padding],
      shadows[shadow],
      className
    )}>
      {/* Header — only rendered if title or subtitle passed */}
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-white font-semibold text-lg leading-tight">{title}</h3>
          )}
          {subtitle && (
            <p className="text-gray-400 text-sm mt-0.5">{subtitle}</p>
          )}
        </div>
      )}

      {/* Body */}
      <div>{children}</div>

      {/* Footer — only rendered if passed */}
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;