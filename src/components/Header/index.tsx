import { Container, Button } from "./styles";
import { FiPlus } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="tasks" height={30} />
      <Button>
        <FiPlus size={24} />
        <span>nova tarefa</span>
      </Button>
    </Container>
  );
}
