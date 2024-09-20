import React from "react";

type ButtonProps = { onClick: () => void };
const ButtonAddTasks = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="max-w-[272px] w-full mt-4 px-6 py-4 bg-gradient-to-r from-[#0795d3] to-[#52c0ef] rounded-lg justify-center items-center gap-2 inline-flex lg:max-w-[450px]"
    >
      <div className="text-white text-base font-medium">
        Adicionar nova tarefa
      </div>
    </button>
  );
};

export default ButtonAddTasks;
