import { FiTrash2 } from "react-icons/fi";
import Modal from "react-modal";
import { useTasks } from "../../hooks/useTasks";
import { Button } from "../Button";
import { ButtonTwoOptions } from "../Button/styles";

Modal.setAppElement("#root");

interface DeleteAllModalProps {
  isDeleteModalOpen: boolean;
  handleCloseDeleteModal: () => void;
  handleDeleteAllTasks: () => void;
}

export function DeleteAllModal({
  isDeleteModalOpen,
  handleCloseDeleteModal,
  handleDeleteAllTasks,
}: DeleteAllModalProps) {
  const { taskList } = useTasks();

  return (
    <Modal
      isOpen={isDeleteModalOpen}
      // isOpen={true}
      onRequestClose={handleCloseDeleteModal}
      className="modal-body"
      overlayClassName="modal-overlay"
    >
      <h1>Deletar todas as tarefas</h1>
      {taskList.length === 0 ? (
        <>
          <p>Parece que você não possui tarefas para serem excluídas.</p>
          <p>Volte aqui quando tiver ao menos uma. 😉</p>

          <Button
            color={"#5C4F4E"}
            bgColor={"#F7EDE1"}
            onClick={handleCloseDeleteModal}
          >
            <span>fechar</span>
          </Button>
        </>
      ) : (
        <>
          <p>
            Esta é uma ação destrutiva. Assim que você confirmar, não terá
            volta.
          </p>
          <ButtonTwoOptions>
            <Button
              color={"#5C4F4E"}
              bgColor={"#F7EDE1"}
              onClick={handleCloseDeleteModal}
            >
              <span>Não deletar</span>
            </Button>
            <Button
              color={"#FCF7F2"}
              bgColor={"#7C2727"}
              onClick={handleDeleteAllTasks}
            >
              <FiTrash2 />
              <span>Deletar tudo</span>
            </Button>
          </ButtonTwoOptions>
        </>
      )}
    </Modal>
  );
}
