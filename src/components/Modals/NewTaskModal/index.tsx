import { useState } from "react";
import Modal from "react-modal";
import { Button } from "../../Button/styles";

import { FiPlus, FiX } from "react-icons/fi";
import { NewTaskForm } from "./styles";
import { FormEvent } from "react";
import { useTasks } from "../../../hooks/useTasks";
import { useModal } from "../../../hooks/useModal";

Modal.setAppElement("#root");

export function NewTaskModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useTasks();
  const { isNewTaskModalOpen, closeNewTaskModal } = useModal();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setTitle("");
    setDescription("");

    createTask({ title, description });
  }

  return (
    <Modal
      isOpen={isNewTaskModalOpen}
      onRequestClose={closeNewTaskModal}
      className="modal-body"
      overlayClassName="modal-overlay"
    >
      <NewTaskForm onSubmit={handleSubmit}>
        <FiX size={24} className="modal-close" onClick={closeNewTaskModal} />
        <h1>Criar nova tarefa</h1>

        <input
          type="text"
          placeholder="Título *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          autoFocus
        />

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button variant="colored" aria-label="Criar tarefa">
          <FiPlus size={24} />
          <span>criar tarefa</span>
        </Button>
      </NewTaskForm>
    </Modal>
  );
}
