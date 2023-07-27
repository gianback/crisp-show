'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
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

export function MainBanner() {
  return (
    <section>
      <Swiper>
        {bannerList.map(({ id, img }) => (
          <SwiperSlide key={id}>
            <img
              src={img}
              alt="image banner"
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
