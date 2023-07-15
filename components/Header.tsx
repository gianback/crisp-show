'use client';
import Image from 'next/image';
import logo from '@/public/logo.png';
import { NavbarProvider } from '@/context/NavbarContext';
import { Nabvar } from './Nabvar';
import { IconSearch } from './IconSearch';
import { IconCart } from './IconCart';
import { Container } from './Container';

export function Header() {
  return (
    <header className="sticky top-0 bg-black">
      <NavbarProvider>
        <Container className="flex justify-between items-center relative">
          <Nabvar />
          <Image
            src={logo.src}
            width={150}
            height={150}
            alt="Logo Crisp-shop"
          />
          <div className="flex gap-4">
            <IconSearch />
            <IconCart />
          </div>
          <div className="min-h-screen w-full fixed inset-0 opacity-70 z-[-1]"></div>
        </Container>
      </NavbarProvider>
    </header>
  );
}
