import Button from '../Button';
import { Container } from '../Container';

export function BannerOffer() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2">
          <picture className="flex items-center justify-center">
            <img
              src="/best-price.png"
              alt=""
              className="w-1/2"
            />
          </picture>
          <div className="flex items-center">
            <p className="max-w-[30ch] text-white font-medium text-xl">
              Disfruta de los mejores precio, revisa nuestra tienda !
            </p>
            <div>
              <Button href="/shop">Ver tienda</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
