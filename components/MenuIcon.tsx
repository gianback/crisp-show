import { useNavbarContext } from '@/context/NavbarContext';
import { FC } from 'react';

interface MenuIconProps {
  type?: string;
}

export const MenuIcon: FC<MenuIconProps> = ({ type = 'hamburguer' }) => {
  const { setMenuActive, isMenuActive } = useNavbarContext();
  const handleChangeMenuActive = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <div
      className={`menu-icon ${type} ${isMenuActive ? 'change' : null}`}
      onClick={handleChangeMenuActive}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
