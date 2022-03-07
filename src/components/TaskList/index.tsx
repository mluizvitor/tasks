import { FiTrash2 } from "react-icons/fi";
import { Container, ListItem, EmptyPage, ListContainer } from "./styles";

import emptyImg from "../../assets/empty.webp";
import { Button } from "../Button";
import { useTasks } from "../../hooks/useTasks";
import { useModal } from "../../hooks/useModal";

export function TaskList() {
  const { taskList, deleteTask, toggleTask } = useTasks();
  const { openImportModal } = useModal();

  function handleDeleteTask(taskId: string) {
    deleteTask(taskId);
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
            <Button
              onClick={openImportModal}
              color={"#fcf7f2"}
              bgColor={"#d8605b"}
            >
              importar
            </Button>
          </div>
        </EmptyPage>
      ) : (
        <ListContainer>
          {taskList.map((task) => (
            <ListItem key={task.id}>
              <input
                type="checkbox"
                readOnly
                checked={task.isCompleted}
                onClick={() => handleToggleTask(task.id)}
              />
              <div>
                <strong
                  className={task.isCompleted ? "complete" : ""}
                  onClick={() => handleToggleTask(task.id)}
                >
                  {task.title}
                </strong>
                {task.description && <p>{task.description}</p>}
              </div>
              <Button
                color="#D8605B"
                bgColor="#F8E8E3"
                onClick={() => handleDeleteTask(task.id)}
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
