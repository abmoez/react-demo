// ============================================
// About Page
// Best Practice: Informational page with sections
// ============================================

import { Card } from '../../components/ui';
import './AboutPage.css';

/**
 * About page component
 */
export function AboutPage() {
  const techStack = [
    { name: 'React 19', description: 'Latest React with concurrent features' },
    { name: 'TypeScript', description: 'Static typing for better DX' },
    { name: 'React Router', description: 'Client-side routing' },
    { name: 'Vite', description: 'Lightning fast build tool' },
    { name: 'CSS Modules', description: 'Scoped styling solution' },
    { name: 'ESLint', description: 'Code quality and consistency' },
  ];

  const principles = [
    {
      number: '01',
      title: 'Component Composition',
      description:
        'Build complex UIs from small, reusable pieces. See how Card component uses sub-components like Card.Header and Card.Body.',
    },
    {
      number: '02',
      title: 'Custom Hooks',
      description:
        'Extract reusable logic into hooks. Check out useForm and useLocalStorage for practical examples.',
    },
    {
      number: '03',
      title: 'Context for Global State',
      description:
        'Use React Context for state that needs to be accessed by many components. AuthContext is a perfect example.',
    },
    {
      number: '04',
      title: 'Barrel Exports',
      description:
        'Use index.ts files to re-export modules, making imports cleaner: import { Button, Card } from "./components/ui"',
    },
    {
      number: '05',
      title: 'Separation of Concerns',
      description:
        'Keep API calls in services/, types in types/, utilities in utils/. Each file has one responsibility.',
    },
    {
      number: '06',
      title: 'Protected Routes',
      description:
        'Guard sensitive pages with authentication checks. See how ProtectedRoute component wraps the Dashboard.',
    },
  ];

  return (
    <div className="about">
      {/* Header */}
      <section className="about__header">
        <h1 className="about__title">About This Project</h1>
        <p className="about__subtitle">
          Understanding the architecture and patterns used in this demo
        </p>
      </section>

      {/* Intro */}
      <section className="about__intro">
        <Card variant="elevated">
          <Card.Body>
            <h2>Why This Demo?</h2>
            <p>
              Learning React is more than just understanding JSX and hooks. Real-world
              projects require proper architecture, type safety, state management, and
              consistent patterns. This demo showcases all of these concepts in action.
            </p>
            <p>
              Explore the source code to see how each component is structured, how
              TypeScript types flow through the app, and how different parts communicate.
            </p>
          </Card.Body>
        </Card>
      </section>

      {/* Tech Stack */}
      <section className="about__tech">
        <h2 className="about__section-title">Tech Stack</h2>
        <div className="about__tech-grid">
          {techStack.map((tech) => (
            <Card key={tech.name} variant="outlined">
              <Card.Body>
                <Card.Title>{tech.name}</Card.Title>
                <Card.Description>{tech.description}</Card.Description>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="about__principles">
        <h2 className="about__section-title">Key Principles Demonstrated</h2>
        <div className="about__principles-list">
          {principles.map((principle) => (
            <div key={principle.number} className="about__principle">
              <span className="about__principle-number">{principle.number}</span>
              <div className="about__principle-content">
                <h3 className="about__principle-title">{principle.title}</h3>
                <p className="about__principle-description">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Structure */}
      <section className="about__structure">
        <h2 className="about__section-title">Project Structure</h2>
        <Card variant="elevated">
          <Card.Body>
            <pre className="about__code">
{`src/
├── components/           # Reusable components
│   ├── layout/          # Layout components (Header, Footer)
│   └── ui/              # UI primitives (Button, Card, Input)
├── context/             # React Context providers
├── hooks/               # Custom React hooks
├── pages/               # Page components
│   ├── Home/
│   ├── About/
│   ├── Contact/
│   ├── Login/
│   ├── Dashboard/
│   └── NotFound/
├── services/            # API services
├── types/               # TypeScript types
├── utils/               # Utility functions
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles`}
            </pre>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

