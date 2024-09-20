import Image from "next/image";

type TasksCompletedProps = {
  task: string;
  onDelete: () => void;
};

const TasksCompleted = ({ task, onDelete }: TasksCompletedProps) => {
  return (
    <div className="flex items-center justify-center gap-4 p-4 border border-[#eaecf0] rounded-lg border-dashed hover:bg-[#F7F9FD]">
      <div className="h-6 p-[3px] bg-[#9fdbf5] rounded border border-[#0795d3] cursor-pointer">
        <Image src="/check.svg" width={18} height={18} alt="check" />
      </div>
      <span className="w-28 text-black/50 text-base font-normal line-through lg:w-[274px]">
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

export default TasksCompleted;
