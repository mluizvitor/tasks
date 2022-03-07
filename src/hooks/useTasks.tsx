import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { genId } from "../utils/genId";
import { useModal } from "./useModal";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

type TaskInput = Omit<Task, "id" | "isCompleted">;

interface TaskImport {
  id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

interface TaskContentData {
  taskList: Task[];
  createTask: (taskInput: TaskInput) => void;
  importTasks: (taskInput: TaskInput[]) => void;
  deleteTask: (taskId: string) => void;
  deleteAllTasks: () => void;
  toggleTask: (taskId: string) => void;

  toastSuccess: (toastInput: string) => void;
  toastError: (toastInput: string) => void;
}

interface TasksProviderProps {
  children?: ReactNode;
}

const TaskContext = createContext<TaskContentData>({} as TaskContentData);

export function TaskProvider({ children }: TasksProviderProps) {
  const { closeNewTaskModal } = useModal();

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
      closeNewTaskModal();
      toastSuccess("👍️ Tarefa adicionada com sucesso!");
    } catch {
      toastError("😥️ Não foi possível adicionar tarefa!");
    }
  }

  function importTasks(taskInput: TaskImport[]) {
    try {
      if (!taskInput) return;

      const newTaskInput: Task[] = taskInput.map((task) => {
        if (task.title.length === 0) {
          throw new Error();
        } else {
          return {
            title: task.title,
            description: task.description,
            id: genId(),
            isCompleted: task.isCompleted ? task.isCompleted : false,
          };
        }
      });

      let newTaskList = [...taskList].concat(newTaskInput);

      setTaskList(newTaskList);
      toastSuccess("👍️ Tarefas importadas com sucesso");
    } catch {
      toastError("🙅 Arquivo inválido");
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

  function deleteAllTasks() {
    try {
      setTaskList([]);
    } catch {
      toastError("😥️ Não foi possível limpar todoas as tarefas!");
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
      value={{
        taskList,
        createTask,
        importTasks,
        deleteTask,
        deleteAllTasks,
        toggleTask,
        toastSuccess,
        toastError,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  return context;
}
