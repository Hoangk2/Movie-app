import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
//import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//import required modules
import { Autoplay } from 'swiper/modules';
import styles from './Trend.module.scss';
import TrendCard from '~/components/TrendCard/TrendCard';
const cx = classNames.bind(styles);

function Trend() {
  const [slides, setSlides] = useState([]);

  // Xử lý gọi api
  const fetchData = () => {
    fetch(`http://localhost:3000/data/movieData.json`)
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="trend" className={cx('trend')}>
      <div className={cx('container-fluid')}>
        <h4 className={cx('section-title')}>Coming soon</h4>
      </div>
      <div className={cx('row')}>
        <Swiper
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            840: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          logo={true}
          loop={true}
          className="trendSwiper"
        >
          {slides &&
            slides.length > 0 &&
            slides.map((slide) => (
              <SwiperSlide key={slide._id}>
                <TrendCard slide={slide} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Trend;
