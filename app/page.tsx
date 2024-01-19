"use client";
import { useState } from "react";
import Header from "./ui/header";
import AddTaskRow from "./ui/add-task-row";
import TaskList from "./ui/tasklist";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<any>([]);

  function addTask(task: Task) {
    setTasks([...tasks, task]);
  }

  function removeTask(id: any) {
    setTasks(tasks.filter((task: Task) => task.id !== id));
  }

  function toggleTask(id: number) {
    setTasks(
      tasks.map((task: Task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    );
  }

  return (
    <main className="max-w-[360px] mx-auto py-[.625rem] px-4 mt-[100px]">
      <Header />
      <AddTaskRow addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </main>
  );
}
