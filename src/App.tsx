import React, { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskModal } from "./components/NewTaskModal";
import { TaskList } from "./components/TaskList";

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
      <TaskList />
      <NewTaskModal isModalOpen={isModalOpen} closeModal={handleCloseModal} />
    </>
  );
}

export default App;
