import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import Header from '~/pages/Header/Header';
import Banner from '~/pages/Banner/Banner';
import Main from '~/pages/Main/Main';
import Footer from '~/pages/Footer/Footer';
import BackToTopBtn from '~/components/BackToTopBtn/BackToTopBtn';

const cx = classNames.bind(styles);
function App() {
  const [scroll, setScroll] = useState(0);
  const appRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScroll(window.scrollY);
    });

    return () =>
      window.removeEventListener('scroll', (e) => {
        setScroll(window.scrollY);
      });
  }, [scroll]);

  return (
    <div ref={appRef} className="App">
      <Header scroll={scroll} />
      <Banner />
      <Main />
      <Footer />
      <BackToTopBtn scroll={scroll} />
    </div>
  );
}

export default App;
