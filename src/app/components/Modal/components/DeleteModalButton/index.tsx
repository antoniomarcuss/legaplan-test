type ButtonProps = {
  deleteTasks: () => void;
};

const DeleteModalButton = ({ deleteTasks }: ButtonProps) => {
  return (
    <button
      onClick={deleteTasks}
      className="h-[51px] px-6 py-4 bg-gradient-to-r from-[#d30707] to-[#ef5252] rounded-lg justify-center items-center gap-2 inline-flex lg:flex-1"
    >
      <div className="text-white text-base font-medium font-['Inter Tight']">
        Deletar
      </div>
    </button>
  );
};

export default DeleteModalButton;
