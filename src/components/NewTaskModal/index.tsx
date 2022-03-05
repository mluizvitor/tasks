import { useState } from "react";
import Modal from "react-modal";
import { Button } from "../Button";

import { FiPlus } from "react-icons/fi";
import { NewTaskForm } from "./styles";

Modal.setAppElement("#root");

interface NewTaskModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export function NewTaskModal({ isModalOpen, closeModal }: NewTaskModalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="modal-body"
      overlayClassName="modal-overlay"
    >
      <NewTaskForm>
        <h1>Criar nova tarefa</h1>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Descrição" />
        <Button color="#F7EDE1" bgColor="#D8605B">
          <FiPlus size={24} />
          <span>criar tarefa</span>
        </Button>
      </NewTaskForm>
    </Modal>
  );
}
