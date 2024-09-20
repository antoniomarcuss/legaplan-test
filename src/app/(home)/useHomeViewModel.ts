import { useEffect, useState } from "react";

const useHomeViewModel = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false); // Verifica se estamos no lado do cliente

  useEffect(() => {
    setIsClient(true); // Após a montagem, sabemos que estamos no cliente
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedTasks = localStorage.getItem("tasks");
      const storedCompletedTasks = localStorage.getItem("completedTasks");

      setTasks(
        storedTasks
          ? JSON.parse(storedTasks)
          : ["Lavar as mãos", "Fazer um bolo", "Lavar a louça"]
      );
      setCompletedTasks(
        storedCompletedTasks
          ? JSON.parse(storedCompletedTasks)
          : ["Levar o lixo para fora"]
      );
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }
  }, [tasks, completedTasks, isClient]);

  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);
  const [completedTaskToDelete, setCompletedTaskToDelete] = useState<
    string | null
  >(null);

  const addTask = (newTask: string) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = () => {
    if (taskToDelete) {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task !== taskToDelete)
      );
      setTaskToDelete(null);
      setOpenDeleteModal(false);
    }
  };

  const deleteCompletedTask = () => {
    if (completedTaskToDelete) {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task !== completedTaskToDelete)
      );
      setCompletedTaskToDelete(null);
      setOpenDeleteModal(false);
    }
  };

  const tasksCompleted = (task: string) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
    setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, task]);
  };

  const openAddTaskModal = () => {
    setOpenConfirmModal(true);
  };

  const openDeleteTaskModal = (task: string) => {
    setTaskToDelete(task);
    setOpenDeleteModal(true);
  };

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
