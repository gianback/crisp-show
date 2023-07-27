import Link from 'next/link';
import { MenuIcon } from './MenuIcon';
import { useNavbarContext } from '@/context/NavbarContext';

const menuList = [
  {
    id: 1,
    label: 'HOME',
    url: '/',
  },
  {
    id: 2,
    label: 'SHOP',
    url: '/shop',
  },
  {
    id: 3,
    label: 'BLOG',
    url: '/blog',
  },
  {
    id: 4,
    label: 'CONTACT US',
    url: '/contact-us',
  },
];

export function Nabvar() {
  const { isMenuActive } = useNavbarContext();
  return (
    <>
      <nav
        className={`fixed left-0 right-0 bg-primary pt-24 pb-10 px-4 lg:p-0 text-white transition-top duration-500 ease-in-out lg:bg-black  lg:left-1/2 lg:translate-x-[-50%] lg:top-[50%] lg:absolute lg:translate-y-[-50%]  ${
          isMenuActive ? 'top-0' : 'top-[-100%]'
        }`}
      >
        <ul className="grid gap-4 lg:flex lg:items-center lg:justify-evenly">
          {menuList.map(({ id, label, url }) => (
            <li key={id}>
              <Link href={url}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <MenuIcon />
    </>
  );
}
