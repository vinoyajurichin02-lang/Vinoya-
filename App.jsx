import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'
import UserGuide from './components/UserGuide'

const FILTERS = ['All', 'Not Done', 'Done']

export default function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  const addTask = (text) => setTasks((t) => [{ id: Date.now(), text, done: false }, ...t])
  const toggleTask = (id) => setTasks((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)))
  const deleteTask = (id) => setTasks((t) => t.filter((x) => x.id !== id))

  const doneCount = tasks.filter((t) => t.done).length
  const visible = tasks.filter((t) => filter === 'All' || (filter === 'Done') === t.done)

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-4 py-8 sm:py-12">
      <header className="flex flex-wrap items-end justify-between gap-2">
        <h1 className="text-3xl font-extrabold sm:text-4xl">To-Do List</h1>
        <a href="#guide" className="text-sm font-bold underline underline-offset-4">User Guide</a>
      </header>

      <main className="flex flex-col gap-4">
        <TaskForm onAdd={addTask} />

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-1 rounded-lg bg-white p-1 ring-1 ring-line" role="group" aria-label="Filter tasks">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-md px-3 py-1.5 text-sm font-bold transition ${
                  filter === f ? 'bg-ink text-white' : 'hover:bg-paper'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="text-sm font-medium text-slate-600" aria-live="polite">
            {doneCount} of {tasks.length} done
          </p>
        </div>

        {visible.length === 0 ? (
          <p className="rounded-lg border border-dashed border-line px-4 py-10 text-center text-slate-600">
            {tasks.length === 0 ? 'No tasks yet. Add your first task above.' : `No ${filter} tasks.`}
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {visible.map((t) => (
              <TaskItem key={t.id} task={t} onToggle={toggleTask} onDelete={deleteTask} />
            ))}
          </ul>
        )}

        {tasks.length > 0 && (
          <button
            onClick={() => setTasks([])}
            className="self-end text-sm font-bold text-red-700 underline underline-offset-4"
          >
            Clear all
          </button>
        )}
      </main>

      <UserGuide />
    </div>
  )
}
