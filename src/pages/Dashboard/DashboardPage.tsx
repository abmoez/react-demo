// ============================================
// Dashboard Page (Protected)
// Best Practice: Authenticated-only content
// ============================================

import { useAuth } from '../../context/AuthContext';
import { Button, Card } from '../../components/ui';
import './DashboardPage.css';

/**
 * Dashboard page - only accessible when logged in
 */
export function DashboardPage() {
  const { user, logout } = useAuth();

  const stats = [
    { label: 'Total Projects', value: '12', icon: '📁', trend: '+3 this week' },
    { label: 'Tasks Completed', value: '48', icon: '✅', trend: '+12 today' },
    { label: 'Team Members', value: '8', icon: '👥', trend: '2 online' },
    { label: 'Hours Logged', value: '156', icon: '⏱️', trend: 'This month' },
  ];

  const recentActivity = [
    { action: 'Created new project', time: '2 minutes ago', icon: '📁' },
    { action: 'Completed task: Design Review', time: '1 hour ago', icon: '✅' },
    { action: 'Added team member', time: '3 hours ago', icon: '👤' },
    { action: 'Updated project settings', time: '5 hours ago', icon: '⚙️' },
    { action: 'Uploaded 3 files', time: 'Yesterday', icon: '📎' },
  ];

  const quickActions = [
    { label: 'New Project', icon: '➕' },
    { label: 'Add Task', icon: '📝' },
    { label: 'Invite Member', icon: '📧' },
    { label: 'View Reports', icon: '📊' },
  ];

  return (
    <div className="dashboard">
      {/* Welcome Header */}
      <header className="dashboard__header">
        <div className="dashboard__welcome">
          <h1 className="dashboard__title">
            Welcome back, <span>{user?.name}</span>! 👋
          </h1>
          <p className="dashboard__subtitle">
            Here's what's happening with your projects today.
          </p>
        </div>
        <Button variant="outline" onClick={logout}>
          Sign Out
        </Button>
      </header>

      {/* Stats Grid */}
      <section className="dashboard__stats">
        {stats.map((stat, index) => (
          <Card key={index} variant="elevated" className="dashboard__stat-card">
            <Card.Body>
              <div className="dashboard__stat-header">
                <span className="dashboard__stat-icon">{stat.icon}</span>
                <span className="dashboard__stat-trend">{stat.trend}</span>
              </div>
              <div className="dashboard__stat-value">{stat.value}</div>
              <div className="dashboard__stat-label">{stat.label}</div>
            </Card.Body>
          </Card>
        ))}
      </section>

      {/* Main Content */}
      <div className="dashboard__content">
        {/* Activity Feed */}
        <Card variant="elevated" className="dashboard__activity">
          <Card.Header>
            <Card.Title>Recent Activity</Card.Title>
          </Card.Header>
          <Card.Body>
            <ul className="dashboard__activity-list">
              {recentActivity.map((item, index) => (
                <li key={index} className="dashboard__activity-item">
                  <span className="dashboard__activity-icon">{item.icon}</span>
                  <div className="dashboard__activity-content">
                    <span className="dashboard__activity-action">{item.action}</span>
                    <span className="dashboard__activity-time">{item.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>

        {/* Quick Actions */}
        <Card variant="elevated" className="dashboard__quick-actions">
          <Card.Header>
            <Card.Title>Quick Actions</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="dashboard__actions-grid">
              {quickActions.map((action, index) => (
                <button key={index} className="dashboard__action-btn">
                  <span className="dashboard__action-icon">{action.icon}</span>
                  <span className="dashboard__action-label">{action.label}</span>
                </button>
              ))}
            </div>
          </Card.Body>
        </Card>

        {/* User Info Card */}
        <Card variant="outlined" className="dashboard__user-card">
          <Card.Header>
            <Card.Title>Your Profile</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="dashboard__user-info">
              <div className="dashboard__user-avatar">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="dashboard__user-details">
                <h3>{user?.name}</h3>
                <p>{user?.email}</p>
                <span className="dashboard__user-role">{user?.role}</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Demo Notice */}
      <Card variant="outlined" className="dashboard__notice">
        <Card.Body>
          <p>
            <strong>💡 This is a demo dashboard.</strong> In a real application, this
            data would come from your backend API. Check the source code to see how
            the protected route and auth context work together!
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

