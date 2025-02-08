'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import { carsInfo } from '@/lib/images'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className='min-h-screen bg-black py-12'>
      <div className='container'>
        <div className='mb-4'>
          <h2 className='text-2xl font-bold text-white'>MyCarViewer</h2>
          <small>passe para o lado para ver nossos modelos 🔥</small>
          <div className='flex flex-row items-center gap-4'>
            <button
              onClick={() => {
                if (activeIndex === 0) return
                setActiveIndex(activeIndex - 1)
              }}
            >
              anterior
            </button>
            <button
              className='all-ease-50 text-red-500 transition-all duration-500 ease-out hover:underline'
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              {'próximo >'}
            </button>
          </div>
        </div>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='h-96 w-full rounded-lg'
        >
          {carsInfo[activeIndex]?.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-32 w-full rounded-lg'
        >
          {carsInfo[activeIndex]?.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='mt-4 flex flex-col gap-1'>
          <h3 className='text-xl font-bold text-white'>
            {carsInfo[activeIndex]?.model}
          </h3>
          <p className='text-white'>{carsInfo[activeIndex]?.year}</p>
          <p className='text-white'>{carsInfo[activeIndex]?.price}</p>
          <p className='text-white'>{carsInfo[activeIndex]?.description}</p>
        </div>
      </div>
    </section>
  )
}
