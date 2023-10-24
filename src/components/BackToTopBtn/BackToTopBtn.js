import classNames from 'classnames/bind';
import styles from './BackToTopBtn.module.scss';
import { BsArrowUpSquare } from 'react-icons/bs';
const cx = classNames.bind(styles);

function BackToTopBtn({ scroll }) {
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <a className={cx('back-to-top', { active: scroll > 0 })} onClick={handleBackToTop}>
      <BsArrowUpSquare className={cx('icon')} />
    </a>
  );
}

export default BackToTopBtn;
