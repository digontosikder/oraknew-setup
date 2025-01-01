import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// image import 
import slider1 from "../assets/home/slide1.jpg"
import slider2 from "../assets/home/slide2.jpg"
import slider3 from "../assets/home/slide3.jpg"
import slider4 from "../assets/home/slide4.jpg"
import slider5 from "../assets/home/slide5.jpg"
import SectionTitle from '../SharedComponents/SectionTitle';


const HomeSwiper = () => {
    return (
        <>
        <section>
            <SectionTitle subhedding={"---From 11:00am to 10:00pm---"} hedding={"ORDER ONLINE"}></SectionTitle>
        </section>
           <section>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper lg:w-[1000px] my-11"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h1 className='uppercase -my-11 text-3xl mr-5 text-center'>Salad</h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h1 className='uppercase -my-11 text-3xl mr-5 text-center'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="" />
            <h1 className='uppercase -my-11 text-3xl mr-5 text-center'>Salad</h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="" />
            <h1 className='uppercase -my-11 text-3xl mr-5 text-center'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="" />
            
            </SwiperSlide>
       
      </Swiper>
           </section>
        </>
    );
};

export default HomeSwiper;