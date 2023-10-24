import classNames from 'classnames/bind';
import styles from './MovieSwiper.module.scss';

//import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';
const cx = classNames.bind(styles);

function MovieSwiper({ slides, slideChange }) {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className={cx('movieSwiper')}
    >
      {slides.map((slide) => {
        const { active, ageLimit, date, description, genre, poster, runtime, title, type, video, year, _id } = slide;
        return (
          <SwiperSlide key={_id} className={cx('swiper-slide')}>
            <img src={poster} onClick={() => slideChange(_id)} alt=""></img>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default MovieSwiper;
