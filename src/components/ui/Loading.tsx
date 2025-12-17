// ============================================
// Loading Component
// Best Practice: Consistent loading states across app
// ============================================

import { cn } from '../../utils/helpers';
import './Loading.css';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  text?: string;
}

/**
 * Loading spinner component
 */
export function Loading({ size = 'md', fullScreen = false, text }: LoadingProps) {
  const spinner = (
    <div className={cn('loading', `loading--${size}`)}>
      <div className="loading__spinner">
        <div className="loading__circle loading__circle--1" />
        <div className="loading__circle loading__circle--2" />
        <div className="loading__circle loading__circle--3" />
      </div>
      {text && <p className="loading__text">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return <div className="loading__fullscreen">{spinner}</div>;
  }

  return spinner;
}

