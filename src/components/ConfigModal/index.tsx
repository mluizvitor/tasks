import { useState } from "react";
import { FiFileText, FiUpload, FiX, FiXOctagon } from "react-icons/fi";
import Modal from "react-modal";
import { useTasks } from "../../hooks/useTasks";
import { DeleteAllModal } from "../DeleteAllModal";
import { ImportModal } from "../ImportModal";
import { MenuInfo, MenuList } from "./styles";

Modal.setAppElement("#root");

interface ConfigModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export function ConfigModal({ isModalOpen, closeModal }: ConfigModalProps) {
  const { deleteAllTasks } = useTasks();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
    closeModal();
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function handleOpenImportModal() {
    setIsImportModalOpen(true);
    closeModal();
  }

  function handleCloseImportModal() {
    setIsImportModalOpen(false);
  }

  function handleDeleteAllTasks() {
    deleteAllTasks();
    handleCloseDeleteModal();
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-body"
        overlayClassName="modal-overlay"
      >
        <FiX size={24} className="modal-close" onClick={closeModal} />
        <h1>Configurações</h1>

        <MenuList>
          <li onClick={handleOpenImportModal}>
            <FiUpload size={24} />
            <span>Importar tarefas de arquivo</span>
          </li>

          <li className="disabled">
            <FiFileText size={24} />
            <span>Salvar tarefas para arquivo</span>
          </li>

          <li className="danger" onClick={handleOpenDeleteModal}>
            <FiXOctagon size={24} />
            <span>Apagar todas as tarefas</span>
          </li>
        </MenuList>

        <MenuInfo>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://github.com/mluizvitor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vitor Monteiro
            </a>
          </p>
          <p>Feito com ❤️ no Brasil 🇧🇷</p>
          <br />
          <p>
            Illustration by{" "}
            <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
              Icons 8
            </a>{" "}
            from <a href="https://icons8.com/illustrations">Ouch!</a>
          </p>
        </MenuInfo>
      </Modal>

      <DeleteAllModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleCloseDeleteModal={handleCloseDeleteModal}
        handleDeleteAllTasks={handleDeleteAllTasks}
      />

      <ImportModal
        isImportModalOpen={isImportModalOpen}
        handleCloseImportModal={handleCloseImportModal}
      />
    </>
  );
}
