import { FiTrash2 } from "react-icons/fi";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { useTasks } from "../../hooks/useTasks";
import { Button } from "../Button";
import { ButtonTwoOptions } from "../Button/styles";

Modal.setAppElement("#root");

export function DeleteAllModal() {
  const { deleteAllTasks } = useTasks();
  const { isDeleteAllModalOpen, closeDeleteAllModal, closeConfigModal } =
    useModal();

  function handleDeleteAllTasks() {
    deleteAllTasks();
    closeDeleteAllModal();
    closeConfigModal();
  }

  return (
    <Modal
      isOpen={isDeleteAllModalOpen}
      onRequestClose={closeDeleteAllModal}
      className="modal-body"
      overlayClassName="modal-overlay"
    >
      <h1>Deletar todas as tarefas</h1>
      <p>
        Esta é uma ação destrutiva. Assim que você confirmar, não terá volta.
      </p>
      <ButtonTwoOptions>
        <Button
          color={"#5C4F4E"}
          bgColor={"#F7EDE1"}
          onClick={closeDeleteAllModal}
          aria-label="Não deletar"
        >
          <span>Não deletar</span>
        </Button>
        <Button
          color={"#FCF7F2"}
          bgColor={"#7C2727"}
          onClick={handleDeleteAllTasks}
          aria-label="Deletar tudo"
        >
          <FiTrash2 />
          <span>Deletar tudo</span>
        </Button>
      </ButtonTwoOptions>
    </Modal>
  );
}
