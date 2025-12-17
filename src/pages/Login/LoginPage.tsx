// ============================================
// Login Page
// Best Practice: Authentication flow with redirect
// ============================================

import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button, Card, Input } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import { useForm } from '../../hooks';
import { isValidEmail } from '../../utils/helpers';
import './LoginPage.css';

interface LoginFormData {
  email: string;
  password: string;
}

/**
 * Login page component
 */
export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();
  const [loginError, setLoginError] = useState('');

  // Get the redirect path from location state (set by ProtectedRoute)
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/dashboard';

  // Redirect if already logged in
  if (isAuthenticated) {
    navigate(from, { replace: true });
  }

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useForm<LoginFormData>({
      initialValues: {
        email: '',
        password: '',
      },
      validate: (values) => {
        const errors: Partial<Record<keyof LoginFormData, string>> = {};

        if (!values.email.trim()) {
          errors.email = 'Email is required';
        } else if (!isValidEmail(values.email)) {
          errors.email = 'Please enter a valid email';
        }

        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 6) {
          errors.password = 'Password must be at least 6 characters';
        }

        return errors;
      },
      onSubmit: async (formData) => {
        setLoginError('');
        try {
          await login(formData.email, formData.password);
          navigate(from, { replace: true });
        } catch {
          setLoginError('Login failed. Please check your credentials.');
        }
      },
    });

  return (
    <div className="login">
      <div className="login__container">
        {/* Left side - Branding */}
        <div className="login__branding">
          <div className="login__branding-content">
            <span className="login__branding-icon">⚛️</span>
            <h1 className="login__branding-title">ReactDemo</h1>
            <p className="login__branding-text">
              Welcome back! Sign in to access your personalized dashboard and explore
              all features.
            </p>
            <div className="login__branding-features">
              <div className="login__branding-feature">
                <span>✓</span> Protected Routes
              </div>
              <div className="login__branding-feature">
                <span>✓</span> Context-based Auth
              </div>
              <div className="login__branding-feature">
                <span>✓</span> Redirect After Login
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="login__form-section">
          <Card variant="elevated" className="login__card">
            <Card.Body>
              <h2 className="login__title">Sign In</h2>
              <p className="login__subtitle">
                Enter any email and password (min 6 chars) to test
              </p>

              <form onSubmit={handleSubmit} className="login__form">
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="demo@example.com"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                />

                {loginError && (
                  <div className="login__error" role="alert">
                    {loginError}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="login__submit"
                >
                  Sign In
                </Button>
              </form>

              <div className="login__footer">
                <p>
                  Don't have an account?{' '}
                  <Link to="/contact" className="login__link">
                    Contact us
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

