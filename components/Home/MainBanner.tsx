'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation } from 'swiper/modules';
import { IconArrowLeft } from '../IconArrowLeft';
const bannerList = [
  {
    id: 1,
    img: '/banner-1.png',
  },
  {
    id: 2,
    img: '/banner-2.jpg',
  },
  {
    id: 3,
    img: '/banner-3.jpg',
  },
];

const swiperOptions: SwiperOptions = {
  slidesPerView: 1,
  speed: 700,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
  loop: true,
  modules: [Autoplay, Navigation],
};

export function MainBanner() {
  return (
    <section className="relative  [&>button]:absolute [&>button]:top-1/2 [&>button]:translate-y-[-50%] [&>button]:z-[5]">
      <Swiper {...swiperOptions}>
        {bannerList.map(({ id, img }) => (
          <SwiperSlide key={id}>
            <picture>
              <img
                src={img}
                alt="image banner"
                className="w-full h-full"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="w-8 lg:w-14 flex items-center justify-center py-1 px-2 lg:py-2 lg:px-3 prev-btn left-4 bg-primary rotate-180 rounded-md text-white">
        <IconArrowLeft />
      </button>
      <button className="w-8 lg:w-14 flex items-center justify-center py-1 px-2 lg:py-2 lg:px-3 next-btn right-4 bg-primary rounded-md  text-white">
        <IconArrowLeft />
      </button>
    </section>
  );
}
