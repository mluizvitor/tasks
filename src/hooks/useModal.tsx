import { createContext, ReactNode, useContext, useState } from "react";
import { Task } from "../task";

interface ModalContextData {
  isConfigModalOpen: boolean;
  openConfigModal: () => void;
  closeConfigModal: () => void;

  isNewTaskModalOpen: boolean;
  openNewTaskModal: () => void;
  closeNewTaskModal: () => void;

  isEditTaskModalOpen: boolean;
  openEditTaskModal: () => void;
  closeEditTaskModal: () => void;

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

  taskToManipulate: Task;
  handleTaskToManipulate: (taskEntry: Task) => void;
  clearTaskToManipulate: () => void;
}

interface ModalProviderProps {
  children?: ReactNode;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleteAllModalOpen, setDeleteAllModalOpen] = useState(false);

  const [taskToManipulate, setTaskToManipulate] = useState<Task>({} as Task);

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
   * EditTaskModal mothods
   */
  function openEditTaskModal() {
    setIsEditTaskModalOpen(true);
  }

  function closeEditTaskModal() {
    setIsEditTaskModalOpen(false);
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

  function handleTaskToManipulate(taskEntry: Task) {
    setTaskToManipulate(taskEntry);
  }

  function clearTaskToManipulate() {
    setTaskToManipulate({
      id: "",
      title: "",
      description: "",
      isCompleted: false,
    });
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

        isEditTaskModalOpen,
        openEditTaskModal,
        closeEditTaskModal,

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

        taskToManipulate,
        handleTaskToManipulate,
        clearTaskToManipulate,
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
