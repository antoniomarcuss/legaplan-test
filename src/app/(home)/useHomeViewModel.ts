import { useEffect, useState } from "react";

const useHomeViewModel = () => {
  const [tasks, setTasks] = useState<string[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks
      ? JSON.parse(storedTasks)
      : ["Lavar as mãos", "Fazer um bolo", "Lavar a louça"];
  });

  const [completedTasks, setCompletedTasks] = useState<string[]>(() => {
    const storedCompletedTasks = localStorage.getItem("completedTasks");
    return storedCompletedTasks
      ? JSON.parse(storedCompletedTasks)
      : ["Levar o lixo para fora"];
  }); // Estado para as tarefas finalizadas
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const [completedTaskToDelete, setCompletedTaskToDelete] = useState<
    string | null
  >(null);

  // Função para adicionar nova tarefa
  const addTask = (newTask: string) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  // Função para deletar uma tarefa específica
  const deleteTask = () => {
    if (taskToDelete) {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task !== taskToDelete)
      );
      setTaskToDelete(null);
      setOpenDeleteModal(false); // Fecha o modal após a exclusão
    }
  };

  const deleteCompletedTask = () => {
    if (completedTaskToDelete) {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task !== completedTaskToDelete)
      );
      setCompletedTaskToDelete(null);
      setOpenDeleteModal(false); // Fecha o modal após a exclusão
    }
  };

  // Função para mover uma tarefa para a lista de "tarefas finalizadas"
  const tasksCompleted = (task: string) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== task)); // Remove a tarefa das ativas
    setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, task]); // Adiciona à lista de finalizadas
  };

  // Abre o modal de adicionar tarefa
  const openAddTaskModal = () => {
    setOpenConfirmModal(true);
  };

  // Abre o modal de exclusão de tarefa
  const openDeleteTaskModal = (task: string) => {
    setTaskToDelete(task);
    setOpenDeleteModal(true);
  };

  // Fecha ambos os modais
  const closeConfirmModal = () => setOpenConfirmModal(false);
  const closeDeleteModal = () => setOpenDeleteModal(false);

  return {
    tasks,
    completedTasks,
    openConfirmModal,
    openDeleteModal,
    taskToDelete,
    completedTaskToDelete,
    addTask,
    deleteTask,
    deleteCompletedTask,
    tasksCompleted,
    openAddTaskModal,
    openDeleteTaskModal,
    closeConfirmModal,
    closeDeleteModal,
    setOpenDeleteModal,
    setCompletedTaskToDelete,
  };
};

export default useHomeViewModel;
