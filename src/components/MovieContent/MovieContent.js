import classNames from 'classnames/bind';

import styles from './MovieContent.module.scss';
import Button from '~/components/Button/Button';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
const cx = classNames.bind(styles);
function MovieContent({ movie }) {
  const { active, ageLimit, titleImg, date, description, genre, poster, runtime, title, type, video, year, _id } =
    movie;
  return (
    <div className={cx('content', { active: active })}>
      <img src={titleImg} alt="Movie Title" className={cx('movie-title')} />
      <h4>
        <span>{year}</span>
        <span>
          <i>{ageLimit}</i>
        </span>
        <span>{runtime}</span>
        <span>{type}</span>
      </h4>
      <p>{description}</p>
      <div className={cx('button')}>
        <Button name="BOOK" icon={<BsBookmark />} className={cx('btn')} primary />
        <Button name="MY LIST" icon={<AiOutlinePlus />} primary />
      </div>
    </div>
  );
}

export default MovieContent;
