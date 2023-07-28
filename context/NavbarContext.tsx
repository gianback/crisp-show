import { ReactNode, createContext, useContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface NavbarContextType {
  isMenuActive: boolean;
  setMenuActive: (newValue: boolean) => void;
}

export const NavbarContext = createContext<NavbarContextType>({
  isMenuActive: false,
  setMenuActive: () => {},
});

export const NavbarProvider = ({ children }: Props) => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <NavbarContext.Provider value={{ isMenuActive, setMenuActive }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbarProvider must be used within a NavbarProvider');
  }
  return context;
};
