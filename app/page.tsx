import { BannerOffer } from '@/components/Home/BannerOffer';
import { MainBanner } from '@/components/Home/MainBanner';
import { Offers } from '@/components/Home/Offers';
import 'swiper/css';
export default async function Home() {
  const resp = await fetch(
    'http://localhost:3000/api/category/a655d924-ae82-4597-8219-e106ae20e8a2',
  );
  const data = await resp.json();
  return (
    <main>
      <MainBanner />
      <Offers offers={data} />
      <BannerOffer />
    </main>
  );
}
