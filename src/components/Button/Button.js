import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ name, icon, className, primary }) {
  const classes = cx(className, { primary });
  return (
    <a href="#" className={classes}>
      {icon}
      {name}
    </a>
  );
}

export default Button;
