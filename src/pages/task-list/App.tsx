import clsx from 'clsx';
import { useState } from 'react'

function App() {
  type Task = {
    id: number
    title: string
    description: string
    completed: boolean
  }

  const [tasks, setTasks] = useState<Task[]>(  // type parameters
    [
      {
        id: 1,
        title: "Dishwashing",
        description: "Wash and dry dishes, pots, pans, and utensils",
        completed: true
      },
      {
        id: 2,
        title: "Laundry",
        description: "Wash, dry, fold, and put away clothes and linens",
        completed: false
      },
      {
        id: 3,
        title: "Vacuuming",
        description: "Vacuum carpets, rugs, and floors throughout the house",
        completed: false
      },
      {
        id: 4,
        title: "Dusting",
        description: "Dust furniture, shelves, and other surfaces",
        completed: false
      }
    ]
  )

  const handleClick = (id: number) => {
    const newTasks = structuredClone(tasks)
    // update completion of task
    const newTask = newTasks.find(task => task.id === id)
    if (newTask === undefined) {
      return tasks
    } else {
      newTask.completed = !newTask.completed
    }

    // sort tasks
    setTasks(newTasks.sort((a, b) => {
      return a.completed ? -1 : 1
    }))
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div className={clsx('flex flex-row justify-left items-center m-5 max-w-1/2 border-1 border-gray-300 rounded-lg', task.completed ? 'bg-green-50' : 'bg-white')}>
            <button onClick={() => handleClick(task.id)}
              className={clsx('aspect-square border-1 rounded-md w-5.5 h-5.5 ml-4 mr-2', task.completed ? 'bg-green-600 border-green-600' : 'bg-white border-gray-300')}>
            </button>
            <div className="flex flex-col px-2 pt-2 pb-3 max-w-1/2">
              <p className="text-md font-light font-inter pb-1">{task.title}</p>
              <p className="text-xs font-extralight text-gray-500">{task.description}</p>
            </div>
          </div >
        )
      })}
    </div>
  )
}

export default App