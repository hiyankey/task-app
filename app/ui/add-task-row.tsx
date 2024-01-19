"use client";
import { useState } from "react";

export default function AddTaskRow({ addTask }: any) {
  const [text, setText] = useState("");
  function handleSubmit(event: any) {
    event.preventDefault();
    setText("");
    addTask({
      id: Date.now(),
      text: text,
      completed: false,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="flex justify-between h-fit w-full overflow-hidden rounded-full bg-[#f0f0f0] shadow-sm backdrop-blur-[32px] items-center p-2"> 
        <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className=" w-full h-full bg-transparent outline-none px-4"
      />
      <button
        type="submit"
        className="flex h-[32px] items-center rounded-full bg-gradient-to-r from-neutral-200 via-yellow-100 to-rose-100 px-4 text-[15px] font-medium tracking-tight text-black/40 hover:text-black/60 "
      >
        Add
      </button></div>
     
    </form>
  );
}
