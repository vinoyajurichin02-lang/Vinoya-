const steps = [
  ['Add a task', 'Type your task in the box, then press the Add Task button or the Enter key.'],
  ['Mark a task as Done or Not Done', 'Press Mark as Done on a task. Press Mark as Not Done to change it back.'],
  ['Delete a task', 'Press Delete on a task to remove it. Use Clear all to empty the whole list.'],
]

export default function UserGuide() {
  return (
    <section id="guide" aria-labelledby="guide-title" className="rounded-xl border border-line bg-white p-5 sm:p-6">
      <h2 id="guide-title" className="text-xl font-extrabold">User Guide</h2>
      <dl className="mt-4 grid gap-4 sm:grid-cols-3">
        {steps.map(([title, body]) => (
          <div key={title}>
            <dt className="font-bold">{title}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-slate-600">{body}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
