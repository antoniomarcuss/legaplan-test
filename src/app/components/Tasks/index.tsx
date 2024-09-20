import Image from "next/image";
import React from "react";

type TasksProps = {
  task: string;
  onDelete: () => void;
  tasksCompleted: () => void;
};

const Tasks = ({ task, onDelete, tasksCompleted }: TasksProps) => {
  return (
    <div className="flex items-center justify-center gap-4 p-4 border rounded-lg border-[#d6dde9] border-dashed hover:bg-[#F7F9FD]">
      <div className="h-6 p-[3px] bg-white rounded border border-[#b0bbd0] justify-center items-center inline-flex">
        <div
          onClick={tasksCompleted} // Ao clicar, move a tarefa para "finalizadas"
          className="w-[18px] h-[18px] relative cursor-pointer"
        />
      </div>
      <span
        onClick={tasksCompleted}
        className="w-28  lg:w-[274px] text-black text-base font-normal cursor-pointer break-words"
      >
        {task}
      </span>
      <div onClick={onDelete}>
        <Image
          className="cursor-pointer"
          src="/trash.svg"
          width={24}
          height={24}
          alt="trash"
        />
      </div>
    </div>
  );
};

export default Tasks;
