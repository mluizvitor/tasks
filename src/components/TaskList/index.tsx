import { FiTrash2 } from "react-icons/fi";
import { Container, ListItem, EmptyPage } from "./styles";

import emptyImg from "../../assets/empty.png";
import { Button } from "../Button";
import { useTasks } from "../../hooks/useTasks";

export function TaskList() {
  const { taskList, deleteTask, toggleTask } = useTasks();

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
        </EmptyPage>
      ) : (
        taskList.map((task) => (
          <ListItem key={task.id}>
            <input
              type="checkbox"
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
            <footer>
              <Button
                color="#D8605B"
                bgColor="#F8E8E3"
                onClick={() => handleDeleteTask(task.id)}
              >
                <FiTrash2 size={16} />
              </Button>
            </footer>
          </ListItem>
        ))
      )}
    </Container>
  );
}
