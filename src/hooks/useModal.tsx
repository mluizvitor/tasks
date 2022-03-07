import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextData {
  isConfigModalOpen: boolean;
  openConfigModal: () => void;
  closeConfigModal: () => void;

  isNewTaskModalOpen: boolean;
  openNewTaskModal: () => void;
  closeNewTaskModal: () => void;

  isImportModalOpen: boolean;
  openImportModal: () => void;
  closeImportModal: () => void;

  isDeleteAllModalOpen: boolean;
  openDeleteAllModal: () => void;
  closeDeleteAllModal: () => void;
}

interface ModalProviderProps {
  children?: ReactNode;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isDeleteAllModalOpen, setDeleteAllModalOpen] = useState(false);

  /**
   * ConfigModal methods
   */
  function openConfigModal() {
    setIsConfigModalOpen(true);
  }

  function closeConfigModal() {
    setIsConfigModalOpen(false);
  }

  /**
   * NewTaskModal mothods
   */
  function openNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function closeNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  /**
   * ImportModal methods
   */
  function openImportModal() {
    setIsImportModalOpen(true);
  }

  function closeImportModal() {
    setIsImportModalOpen(false);
  }

  /**
   * DeleteAllModal methods
   */
  function openDeleteAllModal() {
    setDeleteAllModalOpen(true);
  }

  function closeDeleteAllModal() {
    setDeleteAllModalOpen(false);
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

        isImportModalOpen,
        openImportModal,
        closeImportModal,

        isDeleteAllModalOpen,
        openDeleteAllModal,
        closeDeleteAllModal,
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
