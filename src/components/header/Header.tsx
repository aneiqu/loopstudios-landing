import Navbar from "../navbar/Navbar";
import "./Header.scss";
export default function Header() {
  return (
    <header className='header'>
      <Navbar />
      <div className='header__title_container'>
        <h1 className='header__title'>
          Immersive <br />
          experiences
          <br /> that deliver
        </h1>
      </div>
    </header>
  );
}
