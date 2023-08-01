'use client';
import { Container } from '@/components/Container';
import { useState } from 'react';
import { DropDown } from './product/DropDown';

export default function Store() {
  const [menuFilerActive, setMenuFilerActive] = useState(false);

  const handleMenuFilter = () => {
    setMenuFilerActive(!menuFilerActive);
  };
  return (
    <main>
      <Container>
        <div
          className="border border-solid border-black bg-white py-2 px-3 relative"
          onClick={handleMenuFilter}
        >
          <span className="uppercase">Filtrar</span>

          <div
            className={`fixed bg-white left-0 w-full  transition-all ease-in duration-75 ${
              menuFilerActive ? 'top-30' : '-top-[100%]'
            }`}
          >
            filtros y mas filtros
            <DropDown title="marca">
              <p>filtros de marca</p>
            </DropDown>
          </div>
        </div>
      </Container>
    </main>
  );
}
