import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { Container, ListItem, EmptyPage } from "./styles";

import emptyImg from "../../assets/empty.png";
import { Button } from "../Button";

export function TaskList() {
  return (
    <Container>
      <EmptyPage>
        <img src={emptyImg} alt="Nada por aqui ainda" />
        <p>Suas tarefas aparacerão aqui</p>
      </EmptyPage>

      <ListItem>
        <input type="checkbox" />
        <div>
          <strong>Tir</strong>
          <p>
            Joins automatically, after talking to him in Lepant's mansion. Note:
            If you didn't recruited him while sneaking in Lepant's Mansion, he
            will automatically be available at the HQ after Lepant joined.
          </p>
        </div>
        <footer>
          <Button color="#D8605B" bgColor="#F8E8E3">
            <FiEdit3 size={24} />
            <span>editar</span>
          </Button>
          <Button color="#D8605B" bgColor="#F8E8E3">
            <FiTrash2 size={24} />
            <span>deletar</span>
          </Button>
        </footer>
      </ListItem>
    </Container>
  );
}
