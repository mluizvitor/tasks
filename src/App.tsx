import React, { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskModal } from "./components/NewTaskModal";
import { TaskList } from "./components/TaskList";
import { TaskProvider } from "./hooks/useTasks";

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
    </>
  );
}

export default App;
