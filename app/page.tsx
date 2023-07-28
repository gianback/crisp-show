import { MainBanner } from '@/components/Home/MainBanner';
import { Offers } from '@/components/Home/Offers';
import 'swiper/css';
export default function Home() {
  return (
    <main>
      <MainBanner />
      <Offers />
    </main>
  );
}
