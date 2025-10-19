import { useEffect } from 'react'

import img1 from '../assets/Card-Incio-1.png'
import img2 from '../assets/Card-Incio-2.png'
import img3 from '../assets/Card-Incio-3.png'
import img4 from '../assets/Card-Incio-4.png'
import img5 from '../assets/Card-Incio-5.png'

function CardHome() {
  useEffect(() => {

    const carrusel = document.getElementById('carrusel');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let index = 0;
    const slides = carrusel.children;
    const total = slides.length;

    function showSlide() {
      carrusel.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener('click', () => {
      index = (index + 1) % total;
      showSlide();
    });

    prev.addEventListener('click', () => {
      index = (index - 1 + total) % total;
      showSlide();
    });

    const interval = setInterval(() => {
      index = (index + 1) % total;
      showSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
      next.removeEventListener('click', showSlide);
      prev.removeEventListener('click', showSlide);
    };
  }, []);

  return (
    <div className='relative w-full max-w-3xl mx-auto overflow-hidden shadow-lg'>
      
      <div id='carrusel' className='flex transition-transform duration-700 ease-in-out'>
        <img src={img1} className='w-full flex-shrink-0' alt='Carrusel promo 1' />
        <img src={img2} className='w-full flex-shrink-0' alt='Carrusel promo 2' />
        <img src={img3} className='w-full flex-shrink-0' alt='Carrusel promo 3' />
        <img src={img4} className='w-full flex-shrink-0' alt='Carrusel promo 4' />
        <img src={img5} className='w-full flex-shrink-0' alt='Carrusel promo 5' />
      </div>

    <button id='prev' className='absolute top-1/2 -translate-y-1/2 text-white p-2 h-full hover:bg-gray-800 z-10'> &lt; </button>
    
    <button id='next'className='absolute right-0 top-1/2 -translate-y-1/2 text-white p-2 h-full hover:bg-gray-800 z-10'> &gt; </button>

    </div>
  );
}

export default CardHome;
