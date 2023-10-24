import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Schedule.module.scss';
import Card from '~/components/Card/Card';
const cx = classNames.bind(styles);
const filterList = [
  {
    _id: 1,
    name: 'All',
    active: true,
  },
  {
    _id: 2,
    name: 'Romance',
    active: false,
  },
  {
    _id: 3,
    name: 'Action',
    active: false,
  },
  {
    _id: 4,
    name: 'Thriller',
    active: false,
  },
  {
    _id: 5,
    name: 'Horror',
    active: false,
  },
  {
    _id: 6,
    name: 'Adventure',
    active: false,
  },
];
function Schedule() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  // Xử lý gọi api
  const fetchData = () => {
    fetch(`http://localhost:3000/data/movieData.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    //hàm effect trên chỉ gọi 1 lần vì áp dụng cho fetch, hàm này để data thay đổi thì vẫn update ra giao diện
    setMovies(data);
  }, [data]);

  // Hàm xử lý lọc moviee
  const handleFilter = (filter) => {
    filterList.forEach((item) => {
      item.active = false;
      if (item._id === filter._id) {
        filter.active = true;
      }
    });
    const filterMovies = data.filter((data) => data.genre === filter.name || filter.name === 'All'); // vì data dc giữ nguyên như lúc đầu fetch về
    setMovies(filterMovies);
  };

  return (
    <section id="schedule" className={cx('schedule')}>
      <div className={cx('container-fluid')}>
        <div className={cx('row')}>
          <h4 className={cx('section-title')}>Opening this week</h4>
        </div>

        <div className={cx('row')}>
          <ul className={cx('filters')}>
            {filterList.map((filter) => {
              return (
                <li className={cx({ active: filter.active })} key={filter._id} onClick={() => handleFilter(filter)}>
                  {filter.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={cx('row', 'mt-5')}>
          {movies && movies.length > 0 && movies.map((movie) => <Card key={movie._id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
