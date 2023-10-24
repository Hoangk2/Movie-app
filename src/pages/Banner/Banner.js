import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Banner.module.scss';
import MovieContent from '~/components/MovieContent/MovieContent';
import MovieDate from '~/components/MovieDate/MovieDate';
import PlayBtn from '~/components/PlayBtn/PlayBtn';
import MovieSwiper from '~/components/MovieSwiper/MovieSwiper';
const cx = classNames.bind(styles);
function Banner() {
  const [movies, setMovies] = useState([]);

  // Xử lý gọi api
  const fetchData = () => {
    fetch(`http://localhost:3000/data/movieData.json`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Hàm xử lý đổi banner khi click vào 1 movie trong slider
  const handleSlideChange = (id) => {
    const newMovies = movies.map((movie) => {
      movie.active = false; // để ẩn các phần tử content, traier,..
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies); //1 mảng chứa tất cả phim, các phim đè lên nhau, phim đc chọn thì thêm active để hiển thị
  };
  return (
    <div className={cx('banner')}>
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => {
          return (
            <div className={cx('movie')}>
              <img className={cx('bgImg', { active: movie.active })} src={movie.bgImg} alt="BackgroundImage" />
              <div className={cx('container-fluid')}>
                <div className={cx('row')}>
                  <div className={cx('col-lg-6', 'col-md-12')}>
                    <MovieContent movie={movie} />
                  </div>

                  <div className={cx('col-lg-6', 'col-md-12', 'wrapperDateBtn')}>
                    <MovieDate movie={movie} />
                    <PlayBtn movie={movie} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />}
    </div>
  );
}

export default Banner;
