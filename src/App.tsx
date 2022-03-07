import React from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { NewTaskModal } from "./components/NewTaskModal";
import { TaskList } from "./components/TaskList";
import { TaskProvider } from "./hooks/useTasks";
import "react-toastify/dist/ReactToastify.min.css";
import { ConfigModal } from "./components/ConfigModal";
import { ModalProvider } from "./hooks/useModal";

function App() {
  return (
    <ModalProvider>
      <Header />
      <TaskProvider>
        <TaskList />
        <NewTaskModal />
        <ConfigModal />
      </TaskProvider>
      <ToastContainer limit={4} autoClose={3000} draggablePercent={50} />
    </ModalProvider>
  );
}

export default App;
