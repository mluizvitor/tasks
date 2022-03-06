import Modal from "react-modal";

Modal.setAppElement("#root");

interface ConfigModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export function ConfigModal({ isModalOpen, closeModal }: ConfigModalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="modal-body"
      overlayClassName="modal-overlay"
    >
      <ConfigContainer>
        <h1>Configurações</h1>
      </ConfigContainer>
    </Modal>
  );
}
