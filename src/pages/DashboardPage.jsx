
import { Link, useNavigate } from 'react-router-dom'
import SectionCard from '../components/SectionCard'
import TaskCard from '../components/TaskCard'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function DashboardPage({
  tasks,
  name,
  encouragement,
  onToggle,
  onEdit,
  onDelete
}) {
  const navigate = useNavigate()

  useDocumentTitle('Dashboard')

  const done = tasks.filter(t => t.completed).length
  const pending = tasks.filter(t => !t.completed)
  const pct = tasks.length
    ? Math.round((done / tasks.length) * 100)
    : 0

  return (
    <>
      <div className="welcome">
        <div>
          <p className="eyebrow">YOUR STUDY SPACE</p>
          <h1>Welcome back, {name || 'Student'}.</h1>

          {encouragement && (
            <p className="muted">
              A little progress each day adds up. Let's make today count.
            </p>
          )}
        </div>

        <Link to="/focus" className="btn btn-primary">
          Start focusing
        </Link>
      </div>

      <div className="stats-grid">
        <div className="stat panel">
          <span className="stat-label">Total tasks</span>
          <strong>{tasks.length}</strong>
          <small>In your study list</small>
        </div>

        <div className="stat panel">
          <span className="stat-label">Completed</span>
          <strong>{done}</strong>
          <small>Keep it up</small>
        </div>

        <div className="stat panel">
          <span className="stat-label">Remaining</span>
          <strong>{pending.length}</strong>
          <small>One at a time</small>
        </div>

        <div className="stat panel">
          <span className="stat-label">Progress</span>
          <strong>{pct}%</strong>
          <div className="progress">
            <span style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <div className="dashboard-columns">
        <SectionCard
          title="Your progress"
          subtitle="A snapshot of your study goals"
        >
          <div className="progress-big">
            <div className="progress-ring-text">
              <strong>{pct}%</strong>
              <span>completed</span>
            </div>

            <div className="progress-track">
              <span style={{ width: `${pct}%` }} />
            </div>
          </div>

          <p className="muted">
            You've completed {done} of {tasks.length} tasks.{' '}
            {pct === 100 && tasks.length
              ? 'Everything is done — great work!'
              : 'Keep moving at your own pace.'}
          </p>

          <Link to="/tasks" className="text-link">
            View all tasks
          </Link>
        </SectionCard>

        <SectionCard
          title="Up next"
          subtitle="Your open tasks"
        >
          <div className="task-list">
            {pending.slice(0, 4).map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={onToggle}
                onEdit={task => {
                  onEdit(task)
                  navigate('/tasks')
                }}
                onDelete={onDelete}
              />
            ))}

            {pending.length === 0 && (
              <div className="empty-state">
                All caught up. Add a task to keep momentum.
              </div>
            )}
          </div>

          <Link to="/tasks" className="text-link">
            Manage tasks
          </Link>
        </SectionCard>
      </div>

      <div className="quick-start panel">
        <div>
          <span className="eyebrow">NEED A FRESH START?</span>
          <h2>Give your attention one thing.</h2>
          <p className="muted">
            A focused session can make a big difference.
          </p>
        </div>

        <Link to="/focus" className="btn btn-secondary">
          Open focus timer
        </Link>
      </div>
    </>
  )
}
