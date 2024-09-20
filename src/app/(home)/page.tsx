"use client";
import ButtonAddTasks from "@/app/components/ButtonAddTasks";
import Header from "@/app/components/Header";
import ConfirmTaskModal from "@/app/components/Modal/ConfirmTaskModal";
import DeleteTaskModal from "@/app/components/Modal/DeleteTaskModal";
import Tasks from "@/app/components/Tasks";
import TasksCompleted from "@/app/components/TasksCompleted";
import useHomeViewModel from "./useHomeViewModel";

export default function Home() {
  const {
    tasks,
    taskToDelete,
    tasksCompleted,
    addTask,
    closeConfirmModal,
    closeDeleteModal,
    completedTaskToDelete,
    completedTasks,
    deleteCompletedTask,
    deleteTask,
    openAddTaskModal,
    openConfirmModal,
    openDeleteModal,
    openDeleteTaskModal,
    setOpenDeleteModal,
    setCompletedTaskToDelete,
  } = useHomeViewModel();

  return (
    <div className="md:custom-container min-h-[93vh] lg:min-h-screen px-6 py-4">
      <Header />
      <main className="max-w-[272px] lg:max-w-[450px] m-auto w-full mt-6">
        <div className="flex p-4 rounded-2xl justify-center flex-col items-center gap-6 lg:mb-4 shadow border border-[#eaecf0]">
          <h1 className="text-black/50 text-base font-normal font-['Inter Tight']">
            Suas tarefas de hoje
          </h1>
          {tasks.map((task, index) => (
            <Tasks
              key={index}
              task={task}
              onDelete={() => openDeleteTaskModal(task)}
              tasksCompleted={() => tasksCompleted(task)} // Passa a função para mover a tarefa para finalizadas
            />
          ))}

          <div className="text-black/50 text-base font-normal font-['Inter Tight']">
            Tarefas finalizadas
          </div>

          {/* Renderiza as tarefas finalizadas */}
          {completedTasks.map((task, index) => (
            <TasksCompleted
              key={index}
              task={task}
              onDelete={() => {
                setCompletedTaskToDelete(task); // Define a tarefa a ser deletada
                setOpenDeleteModal(true); // Abre o modal de exclusão
              }}
            />
          ))}
        </div>
        <ButtonAddTasks onClick={openAddTaskModal} />
      </main>

      {/* Modal para adicionar/confirmar tarefa */}
      {openConfirmModal && (
        <ConfirmTaskModal
          addTask={addTask}
          closeConfirmModal={closeConfirmModal}
        />
      )}

      {/* Modal para deletar tarefa */}
      {openDeleteModal && (
        <DeleteTaskModal
          taskTitle={taskToDelete ? taskToDelete : completedTaskToDelete || ""} // Garante que se uma das duas estiver definida, será usada corretamente
          deleteTask={taskToDelete ? deleteTask : undefined}
          deleteCompletedTask={
            completedTaskToDelete ? deleteCompletedTask : undefined
          }
          closeDeleteModal={closeDeleteModal}
        />
      )}
    </div>
  );
}
