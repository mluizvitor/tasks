import React from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { NewTaskModal } from "./components/NewTaskModal";
import { TaskList } from "./components/TaskList";
import { TaskProvider } from "./hooks/useTasks";
import GlobalStyles, { sunsetTheme } from "./styles/global";
import "react-toastify/dist/ReactToastify.min.css";

import { ConfigModal } from "./components/ConfigModal";
import { ModalProvider } from "./hooks/useModal";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={sunsetTheme}>
      <GlobalStyles />

      <ModalProvider>
        <Header />
        <TaskProvider>
          <TaskList />
          <NewTaskModal />
          <ConfigModal />
        </TaskProvider>
        <ToastContainer
          limit={2}
          autoClose={3000}
          draggablePercent={50}
          position={window.screenX > 475 ? "top-right" : "bottom-center"}
        />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
