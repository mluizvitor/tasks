import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = {
  color: string;
  bgColor: string;
  bgTransparency?: number;
  children?: ReactNode;
};

export function Button({
  color,
  bgColor,
  bgTransparency,
  children,
}: ButtonProps) {
  return (
    <ButtonContainer
      color={color}
      bgColor={bgColor}
      bgTransparency={bgTransparency}
    >
      {children}
    </ButtonContainer>
  );
}
