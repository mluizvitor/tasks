import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  color: string;
  bgColor: string;
  bgTransparency?: number;
  children?: ReactNode;
  onClick?: () => void;
}

export function Button({
  color,
  bgColor,
  bgTransparency,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      color={color}
      bgColor={bgColor}
      bgTransparency={bgTransparency}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
}
