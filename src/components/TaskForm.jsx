import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!text.trim()) {
      setError('Type a task before adding it.')
      return
    }
    onAdd(text.trim())
    setText('')
    setError('')
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row" noValidate>
      <div className="flex-1">
        <label htmlFor="task" className="sr-only">New task</label>
        <input
          id="task"
          value={text}
          onChange={(e) => { setText(e.target.value); setError('') }}
          placeholder="What needs to be done?"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base"
          aria-invalid={!!error}
        />
        {error && <p role="alert" className="mt-1 text-sm font-medium text-red-700">{error}</p>}
      </div>
      <button type="submit" className="h-12 rounded-lg bg-ink px-6 font-bold text-white transition hover:bg-[#24365a] active:scale-95 sm:self-start">
        Add Task
      </button>
    </form>
  )
}
