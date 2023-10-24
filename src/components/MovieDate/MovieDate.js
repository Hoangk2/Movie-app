import classNames from 'classnames/bind';
import styles from './MovieDate.module.scss';

const cx = classNames.bind(styles);

function MovieDate({ movie }) {
  return (
    <div className={cx('date', { active: movie.active })}>
      <h2>On {movie.date}</h2>
    </div>
  );
}

export default MovieDate;
