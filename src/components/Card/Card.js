import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import { CiPlay1 } from 'react-icons/ci';
const cx = classNames.bind(styles);

function Card({ movie }) {
  return (
    <div className={cx('col-lg-2', 'col-md-4', 'col-sm-6')}>
      <div className={cx('movie-card')}>
        <img src={movie.poster} alt="Preview Image" className={cx('img-fluid')} />
        <p>
          {movie.runtime} | {movie.genre}
        </p>
        <div className={cx('content')}>
          <h4>{movie.title}</h4>
          <div className={cx('card-icons')}>
            <AiOutlinePlus className={cx('icon')} />
            <CiPlay1 className={cx('icon')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
