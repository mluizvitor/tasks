import { format } from "date-fns";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { ErrorToast, SuccessToast } from "../components/ToastNotifications";
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
  taskFile: TaskFileProps;
  createTask: (taskInput: TaskInput) => void;
  importTasks: (taskInput: TaskInput[]) => void;
  exportTasks: () => void;
  deleteTask: (taskId: string) => void;
  deleteAllTasks: () => void;
  toggleTask: (taskId: string) => void;

  toastSuccess: (toastInput: string) => void;
  toastError: (toastInput: string) => void;
}

interface TasksProviderProps {
  children?: ReactNode;
}

interface TaskFileProps {
  fileUrl?: string;
  fileName?: string;
  fileReady: boolean;
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

  const [taskFile, setTaskFile] = useState<TaskFileProps>({} as TaskFileProps);

  function toastSuccess(toastInput: string) {
    toast(<SuccessToast toastMsg={toastInput} />, {
      className: "tasks-toastify-success",
      progressClassName: "tasks-toastify-success-progress",
    });
  }

  function toastError(toastInput: string) {
    toast(<ErrorToast toastMsg={toastInput} />, {
      className: "tasks-toastify-error",
      progressClassName: "tasks-toastify-error-progress",
    });
  }

  function createTask(taskInput: TaskInput) {
    try {
      if (taskInput.title.length === 0) {
        toastError("Você deve adicionar um título!");

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
      toastSuccess("Tarefa adicionada com sucesso!");
    } catch {
      toastError("Não foi possível adicionar tarefa!");
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
      toastSuccess("Tarefas importadas com sucesso!");
    } catch {
      toastError("Arquivo inválido");
    }
  }

  function exportTasks() {
    try {
      if (taskList.length === 0) {
        return;
      }

      const output = JSON.stringify(taskList, null, 2);

      const blob = new Blob([output]);
      const fileDownloadURL = URL.createObjectURL(blob);

      const nowTime = format(new Date(), "yyyy-MM-dd-HHmmss");

      setTaskFile({
        fileUrl: fileDownloadURL,
        fileName: "tasks-" + nowTime + ".bkp.json",
        fileReady: true,
      });
    } catch {
      toastError("Não foi possível salvar tarefas");
    }
  }

  function deleteTask(taskId: string) {
    try {
      toastSuccess("Tarefa removida com sucesso!");
      setTaskList(taskList.filter((task) => task.id !== taskId));
    } catch {
      toastError("Não foi possível remover tarefa!");
    }
  }

  function deleteAllTasks() {
    try {
      setTaskList([]);
      toastSuccess("Todas as tarefas foram removidas com sucesso!");
    } catch {
      toastError("Não foi possível limpar todoas as tarefas!");
    }
  }

  function toggleTask(taskId: string) {
    try {
      let newTaskList = taskList.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      );

      setTaskList(newTaskList);
    } catch {
      toastError("Não foi possível alterar o estado da tarefa!");
    }
  }

  useEffect(() => {
    localStorage.setItem("@tasks:tasks", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    if (taskFile.fileReady) {
      document.getElementById("downloadFile")?.click();
      toastSuccess("Seu arquivo estará pronto em instantes!");

      taskFile.fileUrl && URL.revokeObjectURL(taskFile.fileUrl);

      setTaskFile({
        fileName: "",
        fileUrl: "",
        fileReady: false,
      });
    }
  }, [taskFile]);

  return (
    <TaskContext.Provider
      value={{
        taskList,
        taskFile,
        createTask,
        importTasks,
        exportTasks,
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
