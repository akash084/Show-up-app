import { useState } from 'react'

const Home = () => {
  const [value, setValue] = useState('')
  const [habits, setHabits] = useState([])

  const handleAdd = () => {
    const text = value.trim()
    if (!text) return
    setHabits((prev) => [...prev, { id: crypto.randomUUID(), name: text }])
    setValue('')
  }

  const handleDelete = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id))
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Enter something..."
          className="w-72 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="w-72 space-y-2 text-black">
        {habits.map((habit) => (
          <li
            key={habit.id}
            className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2"
          >
            <span>{habit.name}</span>
            <button
              type="button"
              onClick={() => handleDelete(habit.id)}
              className="rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
