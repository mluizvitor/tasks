import { FiFileText, FiMoon, FiUpload, FiX, FiXOctagon } from "react-icons/fi";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { useTasks } from "../../hooks/useTasks";
import { DeleteAllModal } from "../DeleteAllModal";
import { ImportModal } from "../ImportModal";
import { MenuInfo, MenuList } from "./styles";

Modal.setAppElement("#root");

interface ConfigModalProps {
  themeName: string;
  themeMethod: () => void;
}

export function ConfigModal({ themeMethod, themeName }: ConfigModalProps) {
  const { taskList, exportTasks, taskFile } = useTasks();
  const { isConfigModalOpen, closeConfigModal } = useModal();
  const { openImportModal, openDeleteAllModal } = useModal();
  const { isDeleteAllModalOpen, isImportModalOpen } = useModal();

  function handleExportTasks() {
    exportTasks();
  }

  return (
    <>
      <Modal
        isOpen={isConfigModalOpen}
        onRequestClose={closeConfigModal}
        className={
          isDeleteAllModalOpen || isImportModalOpen ? "hidden" : "modal-body"
        }
        overlayClassName={
          isDeleteAllModalOpen || isImportModalOpen ? "hidden" : "modal-overlay"
        }
      >
        <FiX size={24} className="modal-close" onClick={closeConfigModal} />
        <h1>Configurações</h1>

        <MenuList>
          <li onClick={themeMethod}>
            <FiMoon size={24} />
            <label htmlFor="darkThemeCheckbox">Tema escuro</label>
            <input
              type="checkbox"
              id="darkThemeCheckbox"
              checked={themeName === "dark"}
              readOnly
            />
          </li>
          <li onClick={openImportModal}>
            <FiUpload size={24} />
            <span>Importar tarefas de arquivo</span>
          </li>

          <li
            onClick={handleExportTasks}
            className={taskList.length === 0 ? "disabled" : ""}
          >
            <FiFileText size={24} />
            <span>Salvar tarefas para arquivo</span>
            <a
              className="hidden"
              download={taskFile.fileName}
              href={taskFile.fileUrl}
              id="downloadFile"
            >
              download
            </a>
          </li>

          <li
            className={"danger " + (taskList.length === 0 ? "disabled" : "")}
            onClick={openDeleteAllModal}
          >
            <FiXOctagon size={24} />
            <span>Apagar todas as tarefas</span>
          </li>
        </MenuList>

        <MenuInfo>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://github.com/mluizvitor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vitor Monteiro
            </a>
          </p>
          <p>Feito com ❤️ no Brasil 🇧🇷</p>
          <br />
          <p>
            Illustration by{" "}
            <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
              Icons 8
            </a>{" "}
            from <a href="https://icons8.com/illustrations">Ouch!</a>
          </p>
        </MenuInfo>
      </Modal>

      <DeleteAllModal />

      <ImportModal />
    </>
  );
}
