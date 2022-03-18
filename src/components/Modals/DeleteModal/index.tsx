import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import { useModal } from "../../../hooks/useModal";
import { useTasks } from "../../../hooks/useTasks";
import { Button, ButtonTwoOptions } from "../../Button/styles";

export function DeleteModal() {
  const { isDeleteModalOpen, closeDeleteModal, taskToManipulate } = useModal();
  const { deleteTask } = useTasks();

  function handleDeleteTask(taskId: string) {
    deleteTask(taskId);
    closeDeleteModal();
  }

  return (
    <Modal
      isOpen={isDeleteModalOpen}
      onRequestClose={closeDeleteModal}
      className="modal-body"
      overlayClassName="modal-overlay"
    >
      <FiX size={24} className="modal-close" onClick={closeDeleteModal} />
      <h1>Deletar tarefa</h1>
      <p>
        Tem certeza que deseja deletar "
        <strong>{taskToManipulate.title}</strong>"?
      </p>
      <ButtonTwoOptions>
        <Button onClick={closeDeleteModal}>
          <span>não deletar</span>
        </Button>
        <Button
          variant="warning"
          onClick={() => handleDeleteTask(taskToManipulate.id)}
        >
          <span>deletar</span>
        </Button>
      </ButtonTwoOptions>
    </Modal>
  );
}
