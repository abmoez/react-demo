// ============================================
// Home Page
// Best Practice: Feature-rich landing page
// ============================================

import { Link } from 'react-router-dom';
import { Button, Card } from '../../components/ui';
import './HomePage.css';

/**
 * Home/Landing page component
 */
export function HomePage() {
  const features = [
    {
      icon: '🏗️',
      title: 'Solid Architecture',
      description:
        'Organized folder structure with types, hooks, context, and reusable components.',
    },
    {
      icon: '🔒',
      title: 'Authentication Ready',
      description:
        'Built-in auth context with protected routes and login flow ready to use.',
    },
    {
      icon: '🎨',
      title: 'Modern Styling',
      description:
        'CSS custom properties, responsive design, and beautiful UI components included.',
    },
    {
      icon: '📦',
      title: 'TypeScript First',
      description:
        'Full TypeScript support with proper types for props, state, and API responses.',
    },
    {
      icon: '🪝',
      title: 'Custom Hooks',
      description:
        'Reusable hooks like useForm and useLocalStorage for common patterns.',
    },
    {
      icon: '🚀',
      title: 'Best Practices',
      description:
        'Follows React best practices including composition, barrel exports, and more.',
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-background">
          <div className="home__hero-gradient" />
          <div className="home__hero-pattern" />
        </div>
        <div className="home__hero-content">
          <span className="home__hero-badge">🎉 Welcome to the Demo</span>
          <h1 className="home__hero-title">
            Learn <span className="home__hero-highlight">React</span> Best Practices
          </h1>
          <p className="home__hero-subtitle">
            A comprehensive demo project showcasing modern React architecture,
            TypeScript integration, and professional patterns used in real-world
            applications.
          </p>
          <div className="home__hero-actions">
            <Link to="/dashboard">
              <Button variant="primary" size="lg">
                View Dashboard
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home__features">
        <div className="home__features-header">
          <h2 className="home__features-title">What's Included</h2>
          <p className="home__features-subtitle">
            Everything you need to understand React project structure
          </p>
        </div>
        <div className="home__features-grid">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated" hoverable>
              <Card.Body>
                <span className="home__feature-icon">{feature.icon}</span>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Description>{feature.description}</Card.Description>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="home__cta">
        <Card variant="elevated" className="home__cta-card">
          <Card.Body>
            <h2 className="home__cta-title">Ready to Explore?</h2>
            <p className="home__cta-text">
              Check out the different pages, try logging in, and explore the codebase
              to see how everything works together.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get in Touch
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

