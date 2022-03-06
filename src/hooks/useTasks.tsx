import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { genId } from "../utils/genId";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

type TaskInput = Omit<Task, "id" | "isCompleted">;

interface TaskContentData {
  taskList: Task[];
  createTask: (taskInput: TaskInput) => void;
  deleteTask: (taskId: string) => void;
  toggleTask: (taskId: string) => void;
}

interface TasksProviderProps {
  children?: ReactNode;
}

const TaskContext = createContext<TaskContentData>({} as TaskContentData);

export function TaskProvider({ children }: TasksProviderProps) {
  const [taskList, setTaskList] = useState<Task[]>(() => {
    const tasks = localStorage.getItem("@tasks:tasks");

    if (tasks) {
      return JSON.parse(tasks);
    }

    return [];
  });

  function toastSuccess(toastInput: string) {
    toast(toastInput, {
      className: "tasks-toastify-success",
      progressClassName: "tasks-toastify-success-progress",
    });
  }

  function toastError(toastInput: string) {
    toast(toastInput, {
      className: "tasks-toastify-error",
      progressClassName: "tasks-toastify-error-progress",
    });
  }

  function createTask(taskInput: TaskInput) {
    try {
      if (taskInput.title.length === 0) {
        toastError("🙅️ Você deve adicionar um título!");

        return;
      }

      let newTaskList = [...taskList];

      newTaskList.push({
        ...taskInput,
        id: genId(),
        isCompleted: false,
      });

      setTaskList(newTaskList);
      toastSuccess("👍️ Tarefa adicionada com sucesso!");
    } catch {
      toastError("😥️ Não foi possível adicionar tarefa!");
    }
  }

  function deleteTask(taskId: string) {
    try {
      toastSuccess("👍️ Tarefa removida com sucesso!");
      setTaskList(taskList.filter((task) => task.id !== taskId));
    } catch {
      toastError("😥️ Não foi possível remover tarefa!");
    }
  }

  function toggleTask(taskId: string) {
    try {
      let newTaskList = taskList.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      );

      setTaskList(newTaskList);
    } catch {
      toastError("😥️ Não foi alterar o estado da tarefa!");
    }
  }

  useEffect(() => {
    localStorage.setItem("@tasks:tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <TaskContext.Provider
      value={{ taskList, createTask, deleteTask, toggleTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  return context;
}
