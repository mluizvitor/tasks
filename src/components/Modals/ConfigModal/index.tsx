import { FiFileText, FiMoon, FiUpload, FiX, FiXOctagon } from "react-icons/fi";
import { MdSort } from "react-icons/md";
import Modal from "react-modal";
import { useModal } from "../../../hooks/useModal";
import { useTasks } from "../../../hooks/useTasks";
import { ListMenu, ListMenuItem } from "../../List/styles";
import { DeleteAllModal } from "../DeleteAllModal";
import { ImportModal } from "../ImportModal";
import { MenuInfo } from "./styles";

import AppPackage from "../../../../package.json";

Modal.setAppElement("#root");

interface ConfigModalProps {
  themeChange: () => void;
  sortChange: () => void;
  configParams: { theme: string; completedLast: boolean };
}

export function ConfigModal({
  themeChange,
  sortChange,
  configParams,
}: ConfigModalProps) {
  const { taskList, exportTasks, taskFile, sortCompletedLast } = useTasks();
  const { isConfigModalOpen, closeConfigModal } = useModal();
  const { openImportModal, openDeleteAllModal } = useModal();
  const { isDeleteAllModalOpen, isImportModalOpen } = useModal();

  function handleExportTasks() {
    exportTasks();
  }

  function handleSort() {
    sortCompletedLast(!configParams.completedLast);
    sortChange();
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

        <ListMenu>
          <ListMenuItem onClick={themeChange}>
            <FiMoon size={24} />
            <label htmlFor="darkThemeCheckbox">Tema escuro</label>
            <input
              type="checkbox"
              id="darkThemeCheckbox"
              name="darkThemeCheckbox"
              checked={configParams.theme === "dark"}
              readOnly
            />
          </ListMenuItem>

          <ListMenuItem onClick={handleSort}>
            <MdSort size={24} />
            <label htmlFor="completedLastCheckbox">
              Completos para o fim da lista
            </label>
            <input
              type="checkbox"
              id="completedLastCheckbox"
              checked={configParams.completedLast}
              readOnly
            />
          </ListMenuItem>
        </ListMenu>

        <hr />
        <ListMenu>
          <ListMenuItem onClick={openImportModal}>
            <FiUpload size={24} />
            <span>Importar tarefas de arquivo</span>
          </ListMenuItem>

          <ListMenuItem
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
          </ListMenuItem>

          <ListMenuItem
            className={"danger " + (taskList.length === 0 ? "disabled" : "")}
            onClick={openDeleteAllModal}
          >
            <FiXOctagon size={24} />
            <span>Apagar todas as tarefas</span>
          </ListMenuItem>
        </ListMenu>

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

          <br />

          <p>v{AppPackage.version}</p>
        </MenuInfo>
      </Modal>

      <DeleteAllModal />

      <ImportModal />
    </>
  );
}
