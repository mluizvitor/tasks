import { createContext, ReactNode, useContext, useState } from "react";
import { pixelToRem } from "../utils/pixelToRem";

interface PosProps {
  elTop: number | string;
  elRight: number;
}

interface MenuContextData {
  isTaskMenuOpen: boolean;
  menuPosition: PosProps;
  openTaskMenu: (pos: PosProps) => void;
  closeTaskMenu: () => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

export function MenuProvider({ children }: MenuProviderProps) {
  const [isTaskMenuOpen, setIsTaskMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<PosProps>({
    elTop: 0,
    elRight: 0,
  });

  function openTaskMenu(pos: PosProps) {
    const newRight = pos.elRight - pixelToRem(96 + 32 + 24);
    let newTop = pos.elTop;

    if (newTop > 0.85 * window.innerHeight) {
      newTop = window.innerHeight - pixelToRem(128 + 24);
    }

    setMenuPosition({
      elTop: newTop,
      elRight: newRight,
    });
    setIsTaskMenuOpen(true);
  }

  function closeTaskMenu() {
    setIsTaskMenuOpen(false);
  }

  return (
    <MenuContext.Provider
      value={{ isTaskMenuOpen, menuPosition, openTaskMenu, closeTaskMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  return context;
}
