import logo from "../../assets/images/logo.svg";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <nav className='nav__container'>
      <img src={logo}></img>
      <div className='nav__bttn__container'>
        <a className='underline__effect'>About</a>
        <a className='underline__effect'>Careers</a>
        <a className='underline__effect'>Events</a>
        <a className='underline__effect'>Products</a>
        <a className='underline__effect'>Support</a>
      </div>
    </nav>
  );
}
