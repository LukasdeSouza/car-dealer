// Images
import first from '@/public/images/first.jpg'
import second from '@/public/images/second.jpg'
import third from '@/public/images/third.jpg'
import fourth from '@/public/images/fourth.jpg'
import hbo20volante from '@/public/images/hb20volante.webp'
import hbo20roda from '@/public/images/hb20roda.webp'


export const carsInfo = [
  {
    images: [
      { src: hbo20volante, alt: 'First' },
      { src: hbo20roda, alt: 'Second' },
    ],
    model: 'Hyundai HB20',
    year: '2021',
    price: 'R$ 50.000,00',
    description:
      'Carro completo, com ar condicionado, direção hidráulica, vidros elétricos, travas elétricas, alarme, som, rodas de liga leve, airbag e freios ABS.'
  },
  {
    images: [
      { src: first, alt: 'First' },
      { src: second, alt: 'Second' },
      { src: third, alt: 'Third' },
      { src: fourth, alt: 'Fourth' }
    ],
    model: 'Hyundai HB20',
    year: '2021',
    price: 'R$ 50.000,00',
    description:
      'Carro completo, com ar condicionado, direção hidráulica, vidros elétricos, travas elétricas, alarme, som, rodas de liga leve, airbag e freios ABS.'
  }
]
