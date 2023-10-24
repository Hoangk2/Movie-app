import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import NavListItem from '~/components/NavListItem/NavListItem';
import navListData from '~/data/navListData';
import Search from '~/components/Search/Search';
import Button from '~/components/Button/Button';
import { PiSignInLight } from 'react-icons/pi';
import { AiOutlineBars } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
const cx = classNames.bind(styles);
function Header({ scroll, handleModal }) {
  const [navList, setNavList] = useState(navListData);
  const [modal, setModal] = useState(true);

  //Xử lý khi click vào từng navItem
  const handleNavOnClick = (id) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (id === nav._id) {
        nav.active = true;
      }
      return nav;
    });
    setNavList(newNavList);
  };

  return (
    <header className={cx('header', { scrolled: scroll > 0 })}>
      <a href="/" className={cx('logo')}>
        Cinema
      </a>

      <ul className={cx('nav')}>
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} onClick={handleNavOnClick} />
        ))}
      </ul>

      <Search className={cx('search')} />

      <div className={cx('wrapper-icon')} onClick={() => setModal(false)}>
        <AiOutlineBars className={cx('icon')} />
      </div>

      {!modal ? (
        <>
          <div className={cx('wrapperModal', { active: modal })}>
            <div className={cx('close-icon')} onClick={() => setModal(true)}>
              <AiOutlineClose />
            </div>
            <ul className={cx('nav-mobile')}>
              {navListData.map((nav) => (
                <NavListItem key={nav._id} nav={nav} onClick={handleNavOnClick} />
              ))}
            </ul>
            <Button className={cx('btn-mobile')} name="SIGN IN" icon={<PiSignInLight />} primary />
          </div>
        </>
      ) : undefined}

      <Button className={cx('btn')} name="SIGN IN" icon={<PiSignInLight />} primary />
    </header>
  );
}

export default Header;
