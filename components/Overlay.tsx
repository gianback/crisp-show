import { useNavbarContext } from '@/context/NavbarContext';

export const Overlay = () => {
  const { isMenuActive, setMenuActive } = useNavbarContext();

  const handleOverlay = () => {
    setMenuActive(!isMenuActive);
    document.querySelector('body')?.classList.toggle('no-scroll');
  };

  return (
    <div
      className={`min-h-screen w-full fixed transition-opacity duration-75  ease-linear inset-0  bg-black/75 z-[-10] ${
        isMenuActive ? 'opacity-100 z-[8] visible ' : 'opacity-0 invisible'
      }`}
      onClick={handleOverlay}
    />
  );
};
