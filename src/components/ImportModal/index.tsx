import { useState } from "react";
import { FiCheckCircle, FiSearch, FiUpload, FiX } from "react-icons/fi";
import Modal from "react-modal";
import { useTasks } from "../../hooks/useTasks";
import { Button } from "../Button";
import { ImportContainer } from "./styles";

Modal.setAppElement("#root");

interface ImportModalProps {
  isImportModalOpen: boolean;
  handleCloseImportModal: () => void;
}

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

type TaskInput = Omit<Task, "id" | "isCompleted">;

export function ImportModal({
  isImportModalOpen,
  handleCloseImportModal,
}: ImportModalProps) {
  const { importTasks, toastError } = useTasks();

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
    handleCloseImportModal();
  }

  return (
    <Modal
      isOpen={isImportModalOpen}
      onRequestClose={handleCloseImportModal}
      className="modal-body"
      overlayClassName="modal-overlay"
    >
      <FiX size={24} className="modal-close" onClick={handleCloseImportModal} />
      <h1>Importar tarefas</h1>
      <p>
        Você pode restaurar tarefas a partir de um arquivo exportado
        anteriormente.
      </p>
      <ImportContainer>
        <label htmlFor="loadFile">
          <div>
            {fileName.length === 0 ? (
              <FiSearch size={24} />
            ) : (
              <FiCheckCircle size={24} />
            )}
          </div>
          <span>{fileName.length === 0 ? "Buscar arquivo..." : fileName}</span>
        </label>
        <input type="file" id="loadFile" onChange={handleFile} accept=".json" />
        <Button color={"#f7ede1"} bgColor={"#d8605b"} onClick={handleLoad}>
          <FiUpload size={24} />
          <span>carregar</span>
        </Button>
      </ImportContainer>
    </Modal>
  );
}
