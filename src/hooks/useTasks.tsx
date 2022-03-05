import { createContext, ReactNode, useContext, useState } from "react";
import { genId } from "../components/utils/genId";

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
  const [taskList, setTaskList] = useState<Task[]>([]);

  function createTask(taskInput: TaskInput) {
    let newTaskList = [...taskList];

    newTaskList.push({
      ...taskInput,
      id: genId(),
      isCompleted: false,
    });

    setTaskList(newTaskList);
  }

  function deleteTask(taskId: string) {
    return setTaskList(taskList.filter((task) => task.id !== taskId));
  }

  function toggleTask(taskId: string) {
    let newTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTaskList(newTaskList);
  }

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
