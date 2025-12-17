// ============================================
// 404 Not Found Page
// Best Practice: User-friendly error pages
// ============================================

import { Link } from 'react-router-dom';
import { Button } from '../../components/ui';
import './NotFoundPage.css';

/**
 * 404 Not Found page
 */
export function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <div className="not-found__illustration">
          <span className="not-found__emoji">🔍</span>
          <div className="not-found__code">404</div>
        </div>

        <h1 className="not-found__title">Page Not Found</h1>

        <p className="not-found__text">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="not-found__actions">
          <Link to="/">
            <Button variant="primary" size="lg">
              Go Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </Link>
        </div>

        <div className="not-found__suggestions">
          <p>Or try one of these:</p>
          <ul>
            <li>
              <Link to="/about">About Page</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

