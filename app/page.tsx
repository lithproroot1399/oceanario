// app/page.tsx
import SwiperCarousel from '../components/SwiperCarousel';

export default function HomePage() {
  const dummyImages = [ // Certifique-se que isto está definido corretamente
    { src: '/images/slide1.jpg', alt: 'Slide 1 - Demo' },
    { src: '/images/slide2.jpg', alt: 'Slide 2 - Demo' },
    { src: '/images/slide3.jpg', alt: 'Slide 3 - Demo' },
  ];

  return (
    <div>
      <h1>Meu Projeto Next.js com Swiper.js</h1>
      
      {/* Passando o prop corretamente */}
      <SwiperCarousel images={dummyImages} /> 
    </div>
  );
}
