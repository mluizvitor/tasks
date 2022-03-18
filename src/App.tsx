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
import { MenuProvider } from "./hooks/useMenu";
import { Menu } from "./components/Menu";
import { EditTaskModal } from "./components/Modals/EditTaskModal";

function App() {
  const [configs, setConfigs] = useState(() => {
    const config = localStorage.getItem("@tasks:configs");

    if (config) {
      const parseConfig: { theme: string; completedLast: boolean } =
        JSON.parse(config);

      return {
        theme: parseConfig.theme,
        completedLast: parseConfig.completedLast,
      };
    }

    return {
      theme: "light",
      completedLast: false,
    };
  });

  function themeChange() {
    configs.theme === "light"
      ? setConfigs({ ...configs, theme: "dark" })
      : setConfigs({ ...configs, theme: "light" });
  }

  function sortChange() {
    setConfigs({ ...configs, completedLast: !configs.completedLast });
  }

  useEffect(() => {
    localStorage.setItem("@tasks:configs", JSON.stringify(configs));
  }, [configs]);

  return (
    <>
      <TaskProvider>
        <ThemeProvider
          theme={configs.theme === "light" ? lightTheme : darkTheme}
        >
          <GlobalStyles />

          <ModalProvider>
            <MenuProvider>
              <Header />

              <TaskList />

              <NewTaskModal />

              <ConfigModal
                themeChange={themeChange}
                sortChange={sortChange}
                configParams={configs}
              />

              <EditTaskModal />
              <DeleteModal />

              <Menu />

              <ToastContainer
                limit={2}
                autoClose={3000}
                draggablePercent={50}
                position={window.screenX > 475 ? "top-right" : "bottom-center"}
              />
            </MenuProvider>
          </ModalProvider>
        </ThemeProvider>
      </TaskProvider>
    </>
  );
}

export default App;
