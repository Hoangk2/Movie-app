import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
const cx = classNames.bind(styles);

function Modal({ movie, status, toggleModal }) {
  return (
    <div className={cx('movieModal', { active: status })}>
      <a href="#" className={cx('modalClose')} onClick={toggleModal}>
        <AiOutlineClose />
      </a>
      <iframe
        width="900"
        height="400"
        src={movie.active && status ? movie.video : ''} // Xét điều kiện để play
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer, clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
