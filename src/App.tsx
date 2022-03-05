import React from "react";
import { Header } from "./components/Header";
import { NewTaskModal } from "./components/NewTaskModal";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <TaskList />
      <NewTaskModal />
    </>
  );
}

export default App;
