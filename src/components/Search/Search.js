import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ className }) {
  const classes = cx(className, 'search');
  return (
    <div className={classes}>
      <input typw="text" placeholder="Search" />
    </div>
  );
}

export default Search;
