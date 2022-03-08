import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { NewTaskModal } from "./components/Modals/NewTaskModal";
import { TaskList } from "./components/TaskList";
import { TaskProvider } from "./hooks/useTasks";
import GlobalStyles from "./styles/global";
import "react-toastify/dist/ReactToastify.min.css";

import { ConfigModal } from "./components/Modals/ConfigModal";
import { ModalProvider } from "./hooks/useModal";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";
import { DeleteModal } from "./components/Modals/DeleteModal";

function App() {
  const [themeName, setThemeName] = useState(() => {
    const theme = localStorage.getItem("@tasks:theme");

    if (theme === "light") {
      return "light";
    }
    return "dark";
  });

  function handleThemeChange() {
    themeName === "light" ? setThemeName("dark") : setThemeName("light");
  }

  useEffect(() => {
    localStorage.setItem("@tasks:theme", themeName);
  }, [themeName]);

  return (
    <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <ModalProvider>
        <Header />
        <TaskProvider>
          <TaskList />

          <NewTaskModal />

          <ConfigModal themeName={themeName} themeMethod={handleThemeChange} />

          <DeleteModal />
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
