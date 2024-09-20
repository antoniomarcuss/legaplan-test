import AddModalButton from "../components/AddModalButton";
import CancelModalButton from "../components/CancelModalButton";
import useConfirmModal from "./useConfirmModal";

type ConfirmTaskModalProps = {
  addTask: (newTask: string) => void;
  closeConfirmModal: () => void;
};

const ConfirmTaskModal = ({
  addTask,
  closeConfirmModal,
}: ConfirmTaskModalProps) => {
  const { error, handleInputChange, handleSubmit, newTaskTitle } =
    useConfirmModal({ addTask, closeConfirmModal });

  return (
    <div className="flex justify-center absolute min-h-[93vh] lg:min-h-screen top-0 left-0 pt-6 w-full bg-white lg:bg-opacity-90 lg:items-center">
      <div className="lg:absolute lg:top-52 w-80 h-[690px] px-6 pt-6 lg:w-[450px] lg:h-[286px] lg:p-8 lg:rounded-2xl lg:shadow-2xl bg-white">
        <h1 className="text-black text-2xl font-medium font-['Inter Tight']">
          Nova Tarefa
        </h1>
        <div className="flex flex-col gap-2 mt-8">
          <span className="h-[19px] text-black text-base font-normal font-['Inter Tight']">
            Título
          </span>

          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              placeholder="Digite"
              value={newTaskTitle}
              onChange={handleInputChange}
              className="border p-4 w-full rounded-lg placeholder:text-black/60 placeholder:font-['Inter Tight'] outline-none"
            />
          </form>
          {error && <p className="text-red-500  font-medium">{error}</p>}
        </div>
        <div className="flex flex-col gap-4 lg:flex-row-reverse mt-8">
          <AddModalButton handleSubmit={handleSubmit} />
          <CancelModalButton onClick={closeConfirmModal} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmTaskModal;
