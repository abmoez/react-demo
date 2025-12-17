// ============================================
// Layout Component
// Best Practice: Wrap pages in consistent layout
// ============================================

import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import './Layout.css';

/**
 * Main layout wrapper for all pages
 * Uses Outlet for nested routes (React Router pattern)
 */
export function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

