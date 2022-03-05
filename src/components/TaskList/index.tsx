import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { Container, ListItem, EmptyPage } from "./styles";

import emptyImg from "../../assets/empty.png";
import { Button } from "../Button";
import { useState } from "react";

interface Task {
  id: string | number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export function TaskList() {
  const tasksListFixed: Task[] = [
    {
      id: 1,
      title: "Teste 1",
      description:
        "Aliquam scelerisque odio lacus, eget elementum purus facilisis et. Fusce sagittis eros eros, nec viverra lacus tincidunt in. Nunc egestas, massa id blandit vulputate, odio tortor pharetra sapien, in cursus.",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Teste 2",
      description:
        "Morbi eget nulla ac sapien varius vestibulum eu ac erat. Ut ac nibh sed elit hendrerit maximus vitae id risus. Quisque id pellentesque mi. Phasellus ut elit eu urna ultrices.",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Teste 3",
      description:
        "Nunc nec facilisis augue, ut condimentum mauris. Donec elementum mollis risus vel sollicitudin. Aliquam nec semper lacus. Duis eu lorem.",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Teste 4",
      description:
        "Nunc nec facilisis augue, ut condimentum mauris. Donec elementum mollis risus vel sollicitudin. Aliquam nec semper lacus. Duis eu lorem.",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Teste 5",
      description:
        "Nunc nec facilisis augue, ut condimentum mauris. Donec elementum mollis risus vel sollicitudin. Aliquam nec semper lacus. Duis eu lorem.",
      isCompleted: false,
    },
  ];

  const [taskList, setTaskList] = useState(tasksListFixed);

  function handleDeleteTask(taskId: string | number) {
    return setTaskList(taskList.filter((task) => task.id !== taskId));
  }

  function handleToggleTask(taskId: string | number) {
    let newTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTaskList(newTaskList);
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
