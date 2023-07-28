'use client';
import logo from '@/public/logo.png';
import { NavbarProvider } from '@/context/NavbarContext';
import { Container } from './Container';
import { Nabvar } from './Nabvar';
import { IconSearch } from './IconSearch';
import { IconCart } from './IconCart';
import { Overlay } from './Overlay';

export function Header() {
  return (
    <NavbarProvider>
      <header className="sticky top-0 bg-black z-10">
        <Container className="flex justify-between items-center relative">
          <Nabvar />
          <picture className="z-[20]">
            <img
              src={logo.src}
              width={150}
              height={150}
              alt="Logo Crisp-shop"
            />
          </picture>
          <div className="flex gap-4">
            <IconSearch />
            <IconCart />
          </div>
        </Container>
      </header>
      <Overlay />
    </NavbarProvider>
  );
}
