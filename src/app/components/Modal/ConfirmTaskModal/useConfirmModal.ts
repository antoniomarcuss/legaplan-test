import React, { useState } from "react";

type ConfirmTaskModalProps = {
  addTask: (newTask: string) => void;
  closeConfirmModal: () => void;
};
const useConfirmModal = ({
  addTask,
  closeConfirmModal,
}: ConfirmTaskModalProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle) {
      setError("Digite uma tarefa");
      return;
    }

    addTask(newTaskTitle);
    setNewTaskTitle("");
    closeConfirmModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setNewTaskTitle(e.target.value);
  };

  return { newTaskTitle, error, handleInputChange, handleSubmit };
};

export default useConfirmModal;
