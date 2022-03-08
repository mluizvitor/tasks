import { FiTrash2 } from "react-icons/fi";
import { Container, ListItem, EmptyPage, ListContainer } from "./styles";

import emptyImg from "../../assets/empty.webp";
import { Button } from "../Button/styles";
import { useTasks } from "../../hooks/useTasks";
import { useModal } from "../../hooks/useModal";
import { Task } from "../../task";

export function TaskList() {
  const { taskList, toggleTask } = useTasks();
  const { openImportModal, openDeleteModal, handleTaskToDelete } = useModal();

  function handleDeleteTask(taskEntry: Task) {
    openDeleteModal();
    handleTaskToDelete(taskEntry);
  }

  function handleToggleTask(taskId: string) {
    toggleTask(taskId);
  }

  return (
    <Container>
      {taskList.length === 0 ? (
        <EmptyPage>
          <img src={emptyImg} alt="Nada por aqui ainda" />
          <p>Suas tarefas aparacerão aqui</p>
          <div>
            <p>
              Você pode importar um arquivo com suas tarefas salvas
              anteriormente.
            </p>
            <Button variant="colored" onClick={openImportModal}>
              importar
            </Button>
          </div>
        </EmptyPage>
      ) : (
        <ListContainer>
          {taskList.map((task) => (
            <ListItem key={task.id}>
              <input
                id={task.id}
                type="checkbox"
                readOnly
                checked={task.isCompleted}
                onClick={() => handleToggleTask(task.id)}
              />
              <div>
                <label htmlFor={task.id}>
                  <strong className={task.isCompleted ? "complete" : ""}>
                    {task.title}
                  </strong>
                </label>
                {task.description && <p>{task.description}</p>}
              </div>
              <Button
                variant="semitransparent"
                onClick={() => handleDeleteTask(task)}
                aria-label="Deletar"
              >
                <FiTrash2 size={16} />
              </Button>
            </ListItem>
          ))}
        </ListContainer>
      )}
    </Container>
  );
}
