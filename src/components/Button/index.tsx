import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  color?: string;
  bgColor?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function Button({ color, bgColor, children, ...rest }: ButtonProps) {
  return (
    <ButtonContainer color={color} bgColor={bgColor} {...rest}>
      {children}
    </ButtonContainer>
  );
}
