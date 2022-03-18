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
import sorter from "sort-nested-json";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  timestamp: number;
}

type TaskInput = Omit<Task, "id" | "isCompleted" | "timestamp">;

interface TaskImport {
  id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  timestamp?: number;
}

interface TaskContentData {
  taskList: Task[];
  taskFile: TaskFileProps;
  createTask: (taskInput: TaskInput) => void;
  editTask: (taskId: string, taskInput: TaskInput) => void;
  importTasks: (taskInput: TaskInput[]) => void;
  exportTasks: () => void;
  deleteTask: (taskId: string) => void;
  deleteAllTasks: () => void;
  toggleTask: (taskId: string) => void;

  toastSuccess: (toastInput: string) => void;
  toastError: (toastInput: string) => void;

  sortCompletedLast: (confirmation: boolean) => void;
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
  const { closeNewTaskModal, closeEditTaskModal } = useModal();

  const [taskList, setTaskList] = useState<Task[]>(() => {
    const tasks = localStorage.getItem("@tasks:tasks");

    if (tasks) {
      return JSON.parse(tasks);
    }

    return [];
  });

  const [taskFile, setTaskFile] = useState<TaskFileProps>({} as TaskFileProps);

  function sortCompletedLast(confirmation: boolean) {
    let newTaskList = [...taskList];
    let sortedList = "";

    if (confirmation) {
      sortedList = JSON.stringify(sorter.sort(newTaskList).asc("isCompleted"));
    } else {
      sortedList = JSON.stringify(sorter.sort(newTaskList).asc("timestamp"));
    }
    setTaskList(JSON.parse(sortedList));
  }

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
      const newTaskInput = {
        title: taskInput.title.trim(),
        description: taskInput.description.trim(),
      };

      if (newTaskInput.title.length === 0) {
        toastError("Você deve adicionar um título!");

        return;
      }

      let newTaskList = [...taskList];

      newTaskList.push({
        ...newTaskInput,
        id: genId(),
        isCompleted: false,
        timestamp: Math.round(new Date().getTime() / 1000),
      });

      setTaskList(newTaskList);
      closeNewTaskModal();
      toastSuccess("Tarefa adicionada com sucesso!");
    } catch {
      toastError("Não foi possível adicionar tarefa!");
    }
  }

  function editTask(taskId: string, taskInput: TaskInput) {
    try {
      let newTaskList = [...taskList];
      const taskToEdit = newTaskList.findIndex((task) => task.id === taskId);

      const editTaskInput = {
        title: taskInput.title.trim(),
        description: taskInput.description.trim(),
      };

      if (editTaskInput.title.length === 0) {
        toastError("Você deve adicionar um título!");

        return;
      }

      newTaskList[taskToEdit].title = taskInput.title;
      newTaskList[taskToEdit].description = taskInput.description;

      setTaskList(newTaskList);
      closeEditTaskModal();
      toastSuccess("Tarefa editada com sucesso!");
    } catch {
      toastError("Não foi possível editar tarefa!");
    }
  }

  function importTasks(taskInput: TaskImport[]) {
    try {
      if (!taskInput) return;

      let newTaskInput: Task[] = [];
      let index = 0;

      newTaskInput = taskInput.map((task) => {
        if (task.title.length === 0) {
          throw new Error();
        } else {
          index++;
          return {
            title: task.title,
            description: task.description,
            id: genId(),
            isCompleted: task.isCompleted ? task.isCompleted : false,
            timestamp: task.timestamp
              ? task.timestamp
              : Math.round(new Date().getTime() / 1000) + index,
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
        editTask,
        importTasks,
        exportTasks,
        deleteTask,
        deleteAllTasks,
        toggleTask,
        toastSuccess,
        toastError,
        sortCompletedLast,
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
