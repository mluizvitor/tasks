import { useState } from "react";
import { FiCheckCircle, FiSearch, FiUpload } from "react-icons/fi";
import Modal from "react-modal";
import { useModal } from "../../../hooks/useModal";
import { useTasks } from "../../../hooks/useTasks";
import { Button } from "../../Button/styles";
import { ImportContainer } from "./styles";

Modal.setAppElement("#root");

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

type TaskInput = Omit<Task, "id" | "isCompleted">;

export function ImportModal() {
  const { importTasks, toastError } = useTasks();
  const { isImportModalOpen, closeImportModal, closeConfigModal } = useModal();

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
      toastError("Escolha um arquivo para carregar");
      return;
    }

    importTasks(selectedFile);
    closeImportModal();
    closeConfigModal();
  }

  return (
    <Modal
      isOpen={isImportModalOpen}
      onRequestClose={closeImportModal}
      className="modal-body"
      overlayClassName="modal-overlay"
    >
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

        <Button
          variant="colored"
          onClick={handleLoad}
          aria-label="Carregar arquivo"
        >
          <FiUpload size={24} />
          <span>carregar arquivo</span>
        </Button>

        <Button onClick={closeImportModal} aria-label="Fechar">
          <span>fechar</span>
        </Button>
      </ImportContainer>
    </Modal>
  );
}
