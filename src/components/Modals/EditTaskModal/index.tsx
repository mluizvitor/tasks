import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Button } from "../../Button/styles";

import { FiSave, FiX } from "react-icons/fi";
import { NewTaskForm } from "./styles";
import { FormEvent } from "react";
import { useTasks } from "../../../hooks/useTasks";
import { useModal } from "../../../hooks/useModal";

Modal.setAppElement("#root");

export function EditTaskModal() {
  const {
    isEditTaskModalOpen,
    closeEditTaskModal,
    taskToManipulate,
    clearTaskToManipulate,
  } = useModal();

  const { editTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setTitle("");
    setDescription("");

    editTask(taskToManipulate.id, { title, description });

    clearTaskToManipulate();
  }

  useEffect(() => {
    setTitle(taskToManipulate.title);
    setDescription(taskToManipulate.description);
  }, [taskToManipulate]);

  return (
    <Modal
      isOpen={isEditTaskModalOpen}
      onRequestClose={() => {
        closeEditTaskModal();
      }}
      className="modal-body"
      overlayClassName="modal-overlay"
    >
      <NewTaskForm onSubmit={handleSubmit}>
        <FiX size={24} className="modal-close" onClick={closeEditTaskModal} />
        <h1>Editar tarefa</h1>

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
          <FiSave size={24} />
          <span>salvar edição</span>
        </Button>
      </NewTaskForm>
    </Modal>
  );
}
