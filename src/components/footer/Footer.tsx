import facebookIcon from "../../assets/images/icon-facebook.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import pintrestIcon from "../../assets/images/icon-pinterest.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import logo from "../../assets/images/logo.svg";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className='footer'>
      <div className='row__container'>
        <img src={logo} height={24} width={144} />
        <div className='footer__social_container'>
          <div className='underline__effect'>
            <img src={facebookIcon} width={24} height={24} />
          </div>
          <div className='underline__effect'>
            <img src={twitterIcon} width={24} height={24} />
          </div>
          <div className='underline__effect'>
            <img src={pintrestIcon} width={24} height={24} />
          </div>
          <div className='underline__effect'>
            <img src={instagramIcon} width={24} height={24} />
          </div>
        </div>
      </div>
      <div className='row__container'>
        <div className='footer__nav__container'>
          <a className='underline__effect'>About</a>
          <a className='underline__effect'>Careers</a>
          <a className='underline__effect'>Events</a>
          <a className='underline__effect'>Products</a>
          <a className='underline__effect'>Support</a>
        </div>
        <span>© 2021 Loopstudios. All rights reserved.</span>
      </div>
    </div>
  );
}
