import { Cross2Icon } from "@radix-ui/react-icons";

export default function TaskList({ tasks, toggleTask, removeTask }: any) {
  return (
    <ul className="p-4">
      {tasks.map((task: any) => (
        <li
          key={task.id}
          className="flex items-center gap-3.5 border-b py-2 last:border-none"
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
        
          />
          {task.text}
          <button onClick={() => removeTask(task.id)}>
            <Cross2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}
