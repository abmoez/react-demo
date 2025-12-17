// ============================================
// Card Component
// Best Practice: Composable card for various uses
// ============================================

import type { ReactNode } from 'react';
import { cn } from '../../utils/helpers';
import './Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  hoverable?: boolean;
  onClick?: () => void;
}

/**
 * Versatile Card component
 */
export function Card({
  children,
  className,
  variant = 'default',
  hoverable = false,
  onClick,
}: CardProps) {
  return (
    <div
      className={cn(
        'card',
        `card--${variant}`,
        hoverable && 'card--hoverable',
        onClick && 'card--clickable',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

// Sub-components for composition
Card.Header = function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('card__header', className)}>{children}</div>;
};

Card.Body = function CardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('card__body', className)}>{children}</div>;
};

Card.Footer = function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('card__footer', className)}>{children}</div>;
};

Card.Title = function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h3 className={cn('card__title', className)}>{children}</h3>;
};

Card.Description = function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn('card__description', className)}>{children}</p>;
};

