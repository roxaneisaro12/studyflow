
import { useState, useRef, useEffect } from 'react'
import SectionCard from '../components/SectionCard'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'
import Button from '../components/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useDebounce } from '../hooks/useDebounce'
import { useToggle } from '../hooks/useToggle'

export default function TasksPage({
  tasks,
  onSave,
  onToggle,
  onEdit,
  onDelete,
  editing,
  onCancelEdit
}) {
  useDocumentTitle('Tasks')

  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Due date')
  const [showForm, toggleForm, setShowForm] = useToggle(false)

  const titleRef = useRef(null)

  useEffect(() => {
    if (showForm || editing) {
      titleRef.current?.focus()
    }
  }, [showForm, editing])

  const categories = ['All', ...new Set(tasks.map(t => t.category))]

  const visible = tasks
    .filter(t =>
      t.title.toLowerCase().includes(debounced.toLowerCase()) &&
      (
        filter === 'All' ||
        (filter === 'Completed' ? t.completed :
          filter === 'Pending' ? !t.completed :
            t.category === filter)
      )
    )
    .sort((a, b) =>
      sort === 'A–Z'
        ? a.title.localeCompare(b.title)
        : a.dueDate.localeCompare(b.dueDate)
    )

  function saveTask(task) {
    onSave(task)
    setShowForm(false)
  }

  function openAddForm() {
    onCancelEdit()
    setShowForm(true)
  }

  return (
    <>
      <div className="page-heading">
        <div>
          <p className="eyebrow">ORGANISE YOUR WORK</p>
          <h1>Study tasks</h1>
          <p className="muted">
            Keep your assignments clear and your next step simple.
          </p>
        </div>

        <Button onClick={openAddForm}>
          + Add task
        </Button>
      </div>

      {(showForm || editing) && (
        <SectionCard title={editing ? 'Edit task' : 'New task'}>
          <TaskForm
            ref={titleRef}
            task={editing}
            onSave={saveTask}
            onCancel={() => {
              setShowForm(false)
              onCancelEdit()
            }}
          />
        </SectionCard>
      )}

      <SectionCard
        title="All tasks"
        subtitle={`${tasks.length} tasks in your list`}
      >
        <div className="filters">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search tasks..."
            aria-label="Search tasks"
          />

          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            aria-label="Filter tasks"
          >
            {['All', 'Pending', 'Completed', ...categories.slice(1)].map(x => (
              <option key={x}>{x}</option>
            ))}
          </select>

          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            aria-label="Sort tasks"
          >
            <option>Due date</option>
            <option>A–Z</option>
          </select>
        </div>

        {tasks.length === 0 ? (
          <div className="empty-state">
            No tasks yet. Create your first study task.
          </div>
        ) : visible.length === 0 ? (
          <div className="empty-state">
            No matching tasks. Try changing your search or filter.
          </div>
        ) : (
          <div className="task-list">
            {visible.map(t => (
              <TaskCard
                key={t.id}
                task={t}
                onToggle={onToggle}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </SectionCard>
    </>
  )
}
