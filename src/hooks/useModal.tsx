import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextData {
  isConfigModalOpen: boolean;
  openConfigModal: () => void;
  closeConfigModal: () => void;

  isNewTaskModalOpen: boolean;
  openNewTaskModal: () => void;
  closeNewTaskModal: () => void;
}

interface ModalProviderProps {
  children?: ReactNode;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function openConfigModal() {
    setIsConfigModalOpen(true);
  }

  function closeConfigModal() {
    setIsConfigModalOpen(false);
  }

  function openNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function closeNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isConfigModalOpen,
        openConfigModal,
        closeConfigModal,

        isNewTaskModalOpen,
        openNewTaskModal,
        closeNewTaskModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}
