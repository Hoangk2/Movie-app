import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi';
import FooterNavItem from '~/components/FooterNavItem/FooterNavItem';
const cx = classNames.bind(styles);

function Footer() {
  const usefulLinks = ['Home', 'Movies', 'My List', 'Terms of servie', 'Privacy Policy'];
  const locations = ['Dolorum optio', 'Non rem rerum', 'Cras fermentum odio', 'Justo eget', 'Fermentum iaculis'];
  return (
    <div id="footer" className={cx('footer')}>
      <div className={cx('footer-top')}>
        <div className={cx('container')}>
          <div className={cx('row', 'gy-4')}>
            <div className={cx('col-lg-5', 'col-md-12', 'footer-info')}>
              <a href="/" className={cx('logo', 'd-flex', 'align-items-center')}>
                <span>CINEMA</span>
              </a>
              <p>
                Online movie viewing site with a new user-friendly layout and design. Movie sources are compiled from
                major websites with an extremely rich variety of movie titles and genres.
              </p>
              <div className={cx('social-links', 'mt-3')}>
                <a href="#" className={cx('twitter')}>
                  <BiLogoTwitter className={cx('icon')} />
                </a>
                <a href="#" className={cx('facebook')}>
                  <BiLogoFacebook className={cx('icon')} />
                </a>
                <a href="#" className={cx('instagram')}>
                  <BiLogoInstagram className={cx('icon')} />
                </a>
                <a href="#" className={cx('youtube')}>
                  <BiLogoYoutube className={cx('icon')} />
                </a>
              </div>
            </div>

            <div className={cx('col-lg-2', 'col-6', 'footer-links')}>
              <h4>Useful Links</h4>
              {
                <ul>
                  {usefulLinks.map((link, index) => (
                    <FooterNavItem key={index} name={link} />
                  ))}
                </ul>
              }
            </div>

            <div className={cx('col-lg-2', 'col-6', 'footer-links')}>
              <h4>OUR CINEMAS</h4>
              {
                <ul>
                  {locations.map((link, index) => (
                    <FooterNavItem key={index} name={link} />
                  ))}
                </ul>
              }
            </div>

            <div className={cx('col-lg-3', 'col-6', 'footer-links')}>
              <h4>Contact Us</h4>
              <p>
                Street Name
                <br />
                City Name, State 123456
                <br />
                Australia
                <br />
                <br />
                <strong>Phone:</strong>+123 456 7890
                <br />
                <strong>Email:</strong>info@example.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('container')}>
        <div className={cx('wrapper')}>
          <div className={cx('copyright')}>
            &copy; Copyright{' '}
            <strong>
              <span>DStudio Technology</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className={cx('credits')}>
            Designed by <a href="#">DStudio Technology</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
