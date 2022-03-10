import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { useMenu } from "../../hooks/useMenu";
import { useModal } from "../../hooks/useModal";
import { Task } from "../../task";
import { ListMenuItem } from "../List/styles";
import Modal from "react-modal";

// interface MenuProps {
//   forwardRef: RefObject<HTMLElement> | null;
// }

export function Menu() {
  const { isTaskMenuOpen, menuPosition, closeTaskMenu } = useMenu();
  const { taskToManipulate, handleTaskToManipulate, clearTaskToManipulate } =
    useModal();
  const { openDeleteModal, openEditTaskModal } = useModal();

  function handleDeleteTask(taskEntry: Task) {
    handleTaskToManipulate(taskEntry);
    closeTaskMenu();
    openDeleteModal();
  }

  function handleEditTask(taskEntry: Task) {
    handleTaskToManipulate(taskEntry);
    closeTaskMenu();
    openEditTaskModal();
  }

  return (
    <Modal
      id="taskMenu"
      isOpen={isTaskMenuOpen}
      onRequestClose={() => {
        closeTaskMenu();
        clearTaskToManipulate();
      }}
      className="menu-body"
      overlayClassName="menu-overlay"
      style={{
        content: { top: menuPosition?.elTop, left: menuPosition?.elRight },
      }}
    >
      <ListMenuItem onClick={() => handleEditTask(taskToManipulate)}>
        <FiEdit3 size={24} />
        <span>editar</span>
      </ListMenuItem>

      <ListMenuItem onClick={() => handleDeleteTask(taskToManipulate)}>
        <FiTrash2 size={24} />
        <span>deletar</span>
      </ListMenuItem>
    </Modal>
  );
}
