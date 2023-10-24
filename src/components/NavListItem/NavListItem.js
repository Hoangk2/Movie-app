import React from 'react';
import classNames from 'classnames/bind';
import styles from './NavListItem.module.scss';

const cx = classNames.bind(styles);
function NavListItem({ nav, onClick }) {
  const { _id, link, name, active } = nav;
  return (
    <li className={cx('nav-item')}>
      <a onClick={() => onClick(_id)} className={cx({ active: active })} href={link}>
        {name}
      </a>
    </li>
  );
}

export default NavListItem;
