import { useState } from "react";
import Modal from "react-modal";
import { Button } from "../Button";

import { FiPlus, FiX } from "react-icons/fi";
import { NewTaskForm } from "./styles";
import { FormEvent } from "react";
import { useTasks } from "../../hooks/useTasks";

Modal.setAppElement("#root");

interface NewTaskModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export function NewTaskModal({ isModalOpen, closeModal }: NewTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useTasks();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setTitle("");
    setDescription("");

    createTask({ title, description });

    closeModal();
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="modal-body"
      overlayClassName="modal-overlay"
    >
      <NewTaskForm onSubmit={handleSubmit}>
        <FiX size={24} className="modal-close" onClick={closeModal} />
        <h1>Criar nova tarefa</h1>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button color="#F7EDE1" bgColor="#D8605B" aria-label="Criar tarefa">
          <FiPlus size={24} />
          <span>criar tarefa</span>
        </Button>
      </NewTaskForm>
    </Modal>
  );
}
