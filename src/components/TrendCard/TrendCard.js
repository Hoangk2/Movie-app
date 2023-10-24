import classNames from 'classnames/bind';
import styles from './TrendCard.module.scss';
import { AiOutlineCalendar } from 'react-icons/ai';
const cx = classNames.bind(styles);

function TrendCard({ slide }) {
  return (
    <div className={cx('trend-card')}>
      <img className={cx('img-fluid')} src={slide.poster} />
      <a href="#">
        Add to calendar
        <AiOutlineCalendar className={cx('icon')} />
      </a>
    </div>
  );
}

export default TrendCard;
