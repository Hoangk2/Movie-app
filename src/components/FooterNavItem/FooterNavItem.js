import classNames from 'classnames/bind';
import styles from './FooterNavItem.module.scss';
import { FiChevronRight } from 'react-icons/fi';
const cx = classNames.bind(styles);

function FooterNavItem({ name }) {
  return (
    <li className={cx('footer-item')}>
      <FiChevronRight className={cx('icon')} />
      <a href="#">{name}</a>
    </li>
  );
}

export default FooterNavItem;
