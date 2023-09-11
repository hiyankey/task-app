"use client"

import { useState } from "react"
import { PlusIcon, CloseIcon } from "@iconicicons/react"

const initialTasks = [
  { title: "Cheer design team" },
  {
    title: "Update client on product progress",
  },
]
type TaskItemProps = {
  title: string
  remove: (title: string) => void
}

function TaskItem({ title, remove }: TaskItemProps) {
  return (
    <div className="flex border-t border-neutral-200 py-10 justify-between">
      <h3 className="text-2xl">{title}</h3>
      <CloseIcon
        width={32}
        height={32}
        color="#00000060"
        onClick={() => remove(title)}
      />
    </div>
  )
}

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks)
  const [newTask, setNewTask] = useState("")

  const addTask = (newTask: string) => {
    if (newTask) {
      setTasks((prev) => [...prev, { title: newTask }])
      setNewTask("")
    }
  }
  const removeTask = (title: string) => {
    setTasks(tasks.filter((t) => t.title !== title))
  }
  return (
    <main>
      <div className=" max-w-[600px] mx-auto py-[80px] px-4">
        <div className="flex justify-between h-fit w-full overflow-hidden rounded-[16px] bg-[#f0f0f0] shadow-[2px_4px_20px_0_rgba(0,0,0,0.04)] backdrop-blur-[32px] items-center pr-4">
          <input
            className="w-full h-full bg-transparent p-4 outline-none text-neutral-400"
            type="text"
            placeholder="Type..."
            value={newTask}
            onChange={(ev) => setNewTask(ev.target.value)}
          />
          <PlusIcon
            className="bg-transparent cursor-pointer"
            width={32}
            height={32}
            color="#00000060"
            onClick={() => {
              addTask(newTask)
            }}
          />
        </div>

        <div className="mt-10 last:border-b">
          {tasks.map((task, index) => (
            <TaskItem key={index} title={task.title} remove={removeTask} />
          ))}
        </div>
      </div>
    </main>
  )
}
