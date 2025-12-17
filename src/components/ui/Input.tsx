// ============================================
// Input Component
// Best Practice: Create accessible form inputs
// ============================================

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/helpers';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Reusable Input component with label and error handling
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className={cn('input-group', error && 'input-group--error', className)}>
        {label && (
          <label htmlFor={inputId} className="input-group__label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className="input-group__input"
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <span id={`${inputId}-error`} className="input-group__error" role="alert">
            {error}
          </span>
        )}
        {helperText && !error && (
          <span className="input-group__helper">{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

