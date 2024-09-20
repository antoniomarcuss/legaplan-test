import React from "react";
import DeleteModalButton from "../components/DeleteModalButton";
import CancelModalButton from "../components/CancelModalButton";

type DeleteTaskModalProps = {
  taskTitle: string;
  deleteTask?: () => void;
  closeDeleteModal: () => void;
  deleteCompletedTask?: () => void;
};

const DeleteTaskModal = ({
  taskTitle,
  deleteTask,
  deleteCompletedTask,
  closeDeleteModal,
}: DeleteTaskModalProps & { deleteCompletedTask?: () => void }) => {
  return (
    <div className="flex justify-center absolute min-h-[93vh] lg:min-h-screen top-0 left-0 pt-6 w-full bg-white lg:bg-opacity-90 lg:items-center">
      <div className="lg:absolute lg:top-52 w-80 h-[690px] px-6 pt-6 lg:w-[450px] lg:h-[286px] lg:p-8 lg:rounded-2xl lg:shadow-2xl bg-white">
        <h1 className="text-black text-2xl font-medium font-['Inter Tight']">
          Deletar Tarefa
        </h1>
        <p className="mt-8">
          Tem certeza que deseja excluir a tarefa <strong>{taskTitle}</strong>?
        </p>
        <div className="flex flex-col gap-4 lg:flex-row-reverse mt-8">
          <DeleteModalButton
            deleteTasks={deleteTask || deleteCompletedTask || (() => {})} // Checa qual função usar
          />
          <CancelModalButton onClick={closeDeleteModal} />
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
