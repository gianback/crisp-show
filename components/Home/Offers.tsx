import { Product } from '@/interfaces/product';
import Link from 'next/link';
import { Container } from '../Container';

type OffersType = {
  offers: Product[];
};

export function Offers({ offers }: OffersType) {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-2">
          {offers.map(({ name, mainPicture, id }) => (
            <Link
              key={id}
              href={`/product/${id}`}
            >
              <picture>
                <img
                  src={mainPicture}
                  alt={name}
                />
              </picture>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
