import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Button } from "../Button";

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="tasks" height={30} />
      <Button bgColor="#F7EDE1" color="#D8605B">
        <FiPlus size={24} />
        <span>nova tarefa</span>
      </Button>
    </Container>
  );
}
