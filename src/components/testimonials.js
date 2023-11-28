import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/testimonials.css'
import { Autoplay } from 'swiper/modules'
import { useEffect, useState } from 'react';

const Testimonials = () => {
  
  const [spaceBetween, setSpaceBetween] = useState(10); 
  const [ slidesPerView, setSlidesPerView ] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSpaceBetween(10);
        setSlidesPerView(1);
      } else {
        setSpaceBetween(50);
        setSlidesPerView(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    const slides = [];
    for (let i = 0; i < 6; i++) {
      slides.push(
        <SwiperSlide key={i}>
          <div className='testimonials'>
            <div className='testimonials-info'>
              <div className="image-container">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Testimonials" />
              </div>
              <div className='testimonials-name'>
                <h4>Roger Scott</h4>
                <h6>Marketing Manager</h6>
              </div>
            </div>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
        </SwiperSlide>
      );
    }

  return (
    <>
    <div className="head">
        <h6><span>Testimonials</span></h6>
        <h1>Our Clients</h1>
    </div>
    <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView} autoplay={{ delay: 3000 }} loop={true} className='mySwiper' modules={[Autoplay]} onSwiper={(swiper) => console.log(swiper)}>
      {slides}
    </Swiper>
    </>
  )
}

export default Testimonials
