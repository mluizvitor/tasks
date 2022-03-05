import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Button } from "../Button";

interface HeaderProps {
  openModal: () => void;
}

export function Header({ openModal }: HeaderProps) {
  return (
    <Container>
      <img src={logoImg} alt="tasks" height={30} />
      <Button bgColor="#F7EDE1" color="#D8605B" onClick={openModal}>
        <FiPlus size={24} />
        <span>nova tarefa</span>
      </Button>
    </Container>
  );
}
