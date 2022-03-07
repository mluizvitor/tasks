import { Container } from "./styles";

interface ToastProps {
  toastMsg: string;
}

export function SuccessToast({ toastMsg }: ToastProps) {
  return (
    <Container>
      <span>{"\u{1F44D}"}</span>
      <p>{toastMsg}</p>
    </Container>
  );
}

export function ErrorToast({ toastMsg }: ToastProps) {
  return (
    <Container>
      <span>{"\u{1F914}"}</span>
      <p>{toastMsg}</p>
    </Container>
  );
}
