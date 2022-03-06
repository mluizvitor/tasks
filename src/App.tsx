import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { NewTaskModal } from "./components/NewTaskModal";
import { TaskList } from "./components/TaskList";
import { TaskProvider } from "./hooks/useTasks";
import "react-toastify/dist/ReactToastify.min.css";
import { ConfigModal } from "./components/ConfigModal";

function App() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(true);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewTaskModalOpen(false);
  }

  function handleOpenConfigModal() {
    setIsConfigModalOpen(true);
  }

  function handleCloseConfigModal() {
    setIsConfigModalOpen(false);
  }

  return (
    <>
      <Header
        openNewTaskModal={handleOpenNewTaskModal}
        openConfigModal={handleOpenConfigModal}
      />
      <TaskProvider>
        <TaskList />
        <NewTaskModal
          isModalOpen={isNewTaskModalOpen}
          closeModal={handleCloseModal}
        />
        <ConfigModal
          isModalOpen={isConfigModalOpen}
          closeModal={handleCloseConfigModal}
        />
      </TaskProvider>
      <ToastContainer limit={4} autoClose={3000} />
    </>
  );
}

export default App;
