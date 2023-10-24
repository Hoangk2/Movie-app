import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PlayBtn.module.scss';
import { CiPlay1 } from 'react-icons/ci';
import Modal from '~/components/Modal/Modal';
const cx = classNames.bind(styles);

function PlayBtn({ movie }) {
  const [isPlay, setIsPlay] = useState(false);
  const handlePlay = () => {
    setIsPlay(!isPlay);
  };
  return (
    <>
      <div
        className={cx('trailer', 'd-flex', 'align-items-center', 'justify-content-center', { active: movie.active })}
      >
        <a href="#" className={cx('playBtn')} onClick={() => handlePlay()}>
          <CiPlay1 className={cx('play-icon')} />
        </a>
        <p>Watch trailer</p>
      </div>
      {movie.active && <Modal movie={movie} status={isPlay} toggleModal={() => handlePlay()} />}
    </>
  );
}

export default PlayBtn;
