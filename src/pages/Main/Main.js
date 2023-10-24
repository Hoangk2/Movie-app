import classNames from 'classnames/bind';

import styles from './Main.module.scss';
import Schedule from '~/pages/Schedule/Schedule';
import Trend from '~/pages/Trend/Trend';
import Blog from '~/pages/Blog/Blog';

const cx = classNames.bind(styles);

function Main() {
  return (
    <main>
      <Schedule />
      <Trend />
      <Blog />
    </main>
  );
}

export default Main;
