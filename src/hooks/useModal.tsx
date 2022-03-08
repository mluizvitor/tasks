import { createContext, ReactNode, useContext, useState } from "react";
import { Task } from "../task";

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

  isExportModalOpen: boolean;
  openExportModal: () => void;
  closeExportModal: () => void;

  isDeleteModalOpen: boolean;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;

  isDeleteAllModalOpen: boolean;
  openDeleteAllModal: () => void;
  closeDeleteAllModal: () => void;

  taskToDelete: Task;
  handleTaskToDelete: (taskEntry: Task) => void;
}

interface ModalProviderProps {
  children?: ReactNode;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleteAllModalOpen, setDeleteAllModalOpen] = useState(false);

  const [taskToDelete, setTaskToDelete] = useState<Task>({} as Task);

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
   * ExportModal methods
   */
  function openExportModal() {
    setIsExportModalOpen(true);
  }

  function closeExportModal() {
    setIsExportModalOpen(false);
  }

  /**
   * DeleteModal methods
   */

  function openDeleteModal() {
    setDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalOpen(false);
  }

  function handleTaskToDelete(taskEntry: Task) {
    setTaskToDelete(taskEntry);
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

        isExportModalOpen,
        openExportModal,
        closeExportModal,

        isDeleteModalOpen,
        openDeleteModal,
        closeDeleteModal,

        isDeleteAllModalOpen,
        openDeleteAllModal,
        closeDeleteAllModal,

        taskToDelete,
        handleTaskToDelete,
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
