export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-sm font-bold ${
            task.done ? 'bg-green-100 text-done' : 'bg-amber-100 text-todo'
          }`}
        >
          {task.done ? 'Done' : 'Not Done'}
        </span>
        <p className={`min-w-0 break-words text-base ${task.done ? 'text-slate-500 line-through' : 'font-medium'}`}>
          {task.text}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="flex-1 rounded-lg border border-line px-4 py-2 text-sm font-bold transition hover:bg-paper active:scale-95 sm:flex-none"
        >
          {task.done ? 'Mark as Not Done' : 'Mark as Done'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="flex-1 rounded-lg bg-red-50 px-4 py-2 text-sm font-bold text-red-700 transition hover:bg-red-100 active:scale-95 sm:flex-none"
        >
          Delete
        </button>
      </div>
    </li>
  )
}
