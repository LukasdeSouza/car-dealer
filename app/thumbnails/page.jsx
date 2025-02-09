'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import { carsInfo } from '@/lib/images'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function Thumbnails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(true);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [valorDeEntrada, setValorDeEntrada] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const formatarValorEntrada = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    const numero = Number(apenasNumeros) / 100;
    return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  console.log('carsInfo.length', carsInfo.length)
  console.log('activeINdex', activeIndex)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [activeIndex])

  return (
    <section className='min-h-screen bg-black py-12'>
      <div className='container'>
        <div className='mb-4'>
          <div className='flex flex-row items-baseline justify-between'>
            <h2 className='text-3xl font-bold text-white'>MyCar Viewer</h2>
            <a href="https://www.codetech.software/br"
              target='_blank'
              className='text-light text-red-600 text-xs hover:underline'>
              <code>
                copyright Codetech Software 2025
              </code>
            </a>
          </div>
          {/* <small>passe para o lado para ver nossos modelos 🔥</small> */}
          {loading
            ? (<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
              <p className='text-lg text-white font-bold text-green-600 mt-4'>Carregando Imagens...</p>
            </div>
            ) : (<div className='flex flex-row items-center gap-4 mt-4'>
              {activeIndex > 0 && (
                <button
                  onClick={() => {
                    if (activeIndex === 0) return
                    setActiveIndex(activeIndex - 1)
                  }}
                >
                  {"< anterior"}
                </button>
              )}
              {carsInfo.length - 1 > activeIndex && (
                <button
                  className='all-ease-50 font-bold text-red-600 transition-all duration-500 ease-out hover:underline'
                  onClick={() => setActiveIndex(activeIndex + 1)}
                >
                  {'próximo veículo >'}
                </button>
              )}
            </div>)
          }
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
                  className='block h-full w-full object-cover cursor-pointer'
                  onClick={() => {
                    setSelectedImage(image.src);
                    setIsModalOpen(true);
                  }}
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

        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative p-4 bg-white rounded-lg max-w-3xl w-full">
              <button
                className="absolute top-2 right-2 text-red-600 font-bold text-lg"
                onClick={() => setIsModalOpen(false)}
              >
                ✖
              </button>
              <Image
                src={selectedImage}
                alt="Imagem ampliada"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}


        <div className='mt-4 flex flex-col gap-1'>
          <h3 className='text-2xl font-bold text-white'>
            {carsInfo[activeIndex]?.model}
          </h3>
          <p className='text-white'>{carsInfo[activeIndex]?.year}</p>
          <p className='text-lg text-white font-bold'>{carsInfo[activeIndex]?.price}</p>
          <p className='text-white'>{carsInfo[activeIndex]?.description}</p>
          <a href={`https://wa.me/5534992461158?text=Olá!%20Gostei%20do%20${carsInfo[activeIndex]?.model}%20ano%20${carsInfo[activeIndex]?.year}.`}
            target='_blank'
            className='mt-3'
          >
            <button className='bg-red-600 p-3 rounded-lg font-bold'>Falar com um Vendedor</button>
          </a>
          <button className='w-48 bg-black border border-red-700 p-3 rounded-lg mt-2'
            onClick={() => setShowMoreOptions((showMoreOptions) => !showMoreOptions)}>
            Simular Financiamento
          </button>
          {showMoreOptions && (
            <div className='flex flex-col gap-2 mt-4'>
              <label htmlFor="entrada" className='text-sm'>Valor de Entrada:</label>
              <input
                name='entrada'
                type='text'
                placeholder='R$15.000'
                value={valorDeEntrada}
                onChange={(e) => {
                  const formattedValue = formatarValorEntrada(e.target.value)
                  setValorDeEntrada(formattedValue)
                }}
                className='p-2 border-none rounded-lg bg-gray-800 text-white'
              />
              <a href={`https://wa.me/5534992461158?text=Olá!%20Gostei%20do%20${carsInfo[activeIndex]?.model}%20ano%20${carsInfo[activeIndex]?.year}.Tenho%20${valorDeEntrada}%20para%20entrada.`}
                target='_blank'
                className='mt-3'
              >
                <button className='bg-black border border-red-700 p-3 rounded-lg' onClick={() => setShowMoreOptions(false)}>
                  Enviar
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
