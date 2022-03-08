import { Container } from "./styles";
import { FiPlus, FiSettings } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Button } from "../Button/styles";
import { useModal } from "../../hooks/useModal";

export function Header() {
  const { openConfigModal, openNewTaskModal } = useModal();

  return (
    <Container>
      <img src={logoImg} alt="tasks" height={30} width={93} />
      <div>
        <Button onClick={openNewTaskModal} aria-label="Nova tarefa">
          <FiPlus size={24} />
          <span>nova tarefa</span>
        </Button>

        <Button
          variant="colored"
          onClick={openConfigModal}
          aria-label="Configurações"
        >
          <FiSettings size={24} />
        </Button>
      </div>
    </Container>
  );
}
