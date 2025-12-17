// ============================================
// Main App Component
// Best Practice: Root component with routing setup
// ============================================

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Layout, ProtectedRoute } from './components/layout';
import {
  HomePage,
  AboutPage,
  ContactPage,
  LoginPage,
  DashboardPage,
  NotFoundPage,
} from './pages';

/**
 * Main App component
 * - Wraps everything in AuthProvider for global auth state
 * - Sets up routing with React Router
 * - Uses Layout component for consistent page structure
 */
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes with Layout (Header + Footer) */}
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />

            {/* Protected Routes - require authentication */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
