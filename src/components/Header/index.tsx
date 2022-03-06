import { Container } from "./styles";
import { FiPlus, FiSettings } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Button } from "../Button";

interface HeaderProps {
  openNewTaskModal: () => void;
  openConfigModal: () => void;
}

export function Header({ openNewTaskModal, openConfigModal }: HeaderProps) {
  return (
    <Container>
      <img src={logoImg} alt="tasks" height={30} />
      <div>
        <Button bgColor="#F7EDE1" color="#D8605B" onClick={openNewTaskModal}>
          <FiPlus size={24} />
          <span>nova tarefa</span>
        </Button>

        <Button bgColor="#DB6E68" color="#FCF7F2" onClick={openConfigModal}>
          <FiSettings size={24} />
        </Button>
      </div>
    </Container>
  );
}
