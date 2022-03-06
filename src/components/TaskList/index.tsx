import { FiTrash2, FiFileText } from "react-icons/fi";
import { Container, ListItem, EmptyPage } from "./styles";

import emptyImg from "../../assets/empty.png";
import { Button } from "../Button";
import { useTasks } from "../../hooks/useTasks";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

type TaskInput = Omit<Task, "id" | "isCompleted">;

export function TaskList() {
  const { taskList, importTasks, deleteTask, toggleTask, toastError } =
    useTasks();

  function handleDeleteTask(taskId: string) {
    deleteTask(taskId);
  }

  function handleToggleTask(taskId: string) {
    toggleTask(taskId);
  }

  const [selectedFile, setSelectedFile] = useState<TaskInput[]>([]);
  const [fileName, setFileName] = useState("");
  const [fileExists, setFileExists] = useState(false);

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const fileReader = new FileReader();
    const fileList = event.target.files;

    if (!fileList) return;

    fileReader.onload = (event) => {
      const content = event.target!.result?.toString();
      const parsedContent: TaskInput[] = JSON.parse(content as string);

      setSelectedFile(parsedContent);
      setFileExists(true);
    };

    fileReader.readAsText(fileList[0]);
    setFileName(fileList[0].name);
  }

  function handleLoad() {
    if (!fileExists) {
      toastError("🙅️ Escolha um arquivo para carregar");
      return;
    }

    importTasks(selectedFile);
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
            <label htmlFor="loadFile">
              <span>Buscar arquivo</span>
              <p>{fileName.length === 0 ? "Nenhum arquivo..." : fileName}</p>
            </label>
            <input
              type="file"
              id="loadFile"
              onChange={handleFile}
              accept=".json"
            />
            <Button color={"#f7ede1"} bgColor={"#d8605b"} onClick={handleLoad}>
              <FiFileText size={24} />
              <span>carregar</span>
            </Button>
          </div>
        </EmptyPage>
      ) : (
        taskList.map((task) => (
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
            >
              <FiTrash2 size={16} />
            </Button>
          </ListItem>
        ))
      )}
    </Container>
  );
}
