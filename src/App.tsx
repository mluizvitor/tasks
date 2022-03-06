import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { NewTaskModal } from "./components/NewTaskModal";
import { TaskList } from "./components/TaskList";
import { TaskProvider } from "./hooks/useTasks";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header openModal={handleOpenModal} />
      <TaskProvider>
        <TaskList />
        <NewTaskModal isModalOpen={isModalOpen} closeModal={handleCloseModal} />
      </TaskProvider>
      <ToastContainer limit={4} autoClose={3000} />
    </>
  );
}

export default App;
