import Button from '../Button';
import { Container } from '../Container';

export function BannerOffer() {
  const gradiant = {
    background:
      'linear-gradient(90deg, rgba(255,255,255,1) 7%, rgba(52,42,228,1) 84%)',
  };
  return (
    <div className="bg-white">
      <Container>
        <div
          style={gradiant}
          className="grid grid-cols-2"
        >
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
              <Button href="/store">Ver tienda</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
