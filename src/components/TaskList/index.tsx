import { FiMoreVertical } from "react-icons/fi";
import { Container, ListItem, EmptyPage, ListContainer } from "./styles";

import emptyImg from "../../assets/empty.webp";
import { Button } from "../Button/styles";
import { useTasks } from "../../hooks/useTasks";
import { useModal } from "../../hooks/useModal";
import { Task } from "../../task";
import { useMenu } from "../../hooks/useMenu";

export function TaskList() {
  const { taskList, toggleTask } = useTasks();
  const { openImportModal, handleTaskToManipulate } = useModal();
  const { openTaskMenu } = useMenu();

  function handleToggleTask(taskId: string) {
    toggleTask(taskId);
  }

  function handleTaskMenuOpen(taskEntry: Task) {
    const elTrigger = document
      .getElementById("b-" + taskEntry.id)
      ?.getBoundingClientRect();

    openTaskMenu({
      elTop: elTrigger!.top,
      elRight: elTrigger!.right,
    });
    handleTaskToManipulate(taskEntry);
  }

  return (
    <Container>
      <EmptyPage className={taskList.length === 0 ? "" : "hidden"}>
        <img src={emptyImg} alt="Nada por aqui ainda" />
        <p>Suas tarefas aparacerão aqui</p>
        <div>
          <p>
            Você pode importar um arquivo com suas tarefas salvas anteriormente.
          </p>
          <Button variant="colored" onClick={openImportModal}>
            importar
          </Button>
        </div>
      </EmptyPage>

      <ListContainer className={taskList.length !== 0 ? "" : "hidden"}>
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
              aria-label="Opções"
              id={"b-" + task.id}
              onClick={() => handleTaskMenuOpen(task)}
            >
              <FiMoreVertical />
            </Button>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
}
