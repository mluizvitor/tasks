import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { Container, ListItem, Button } from "./styles";

export function TaskList() {
  return (
    <Container>
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
          <Button>
            <FiEdit3 size={24} />
            <span>editar</span>
          </Button>
          <Button>
            <FiTrash2 size={24} />
            <span>deletar</span>
          </Button>
        </footer>
      </ListItem>
    </Container>
  );
}
