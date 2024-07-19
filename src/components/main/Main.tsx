import interactiveImgLarge from "../../assets/images/desktop/image-interactive.jpg";
import interactiveImgSmall from "../../assets/images/mobile/image-interactive.jpg";
import CreationsCollection from "./CreationsCollection";
import "./Main.scss";

export default function Main() {
  return (
    <>
      <section className='subtitle__container'>
        <div className='subtitle__wrapper'>
          <picture>
            <source media='(min-width: 1439px)' srcSet={interactiveImgLarge} />
            <img src={interactiveImgSmall}></img>
          </picture>
          <div className='subtitle__text__container'>
            <h2 className='subtitle__header'>The leader in interactive VR</h2>
            <p className='subtitle__description'>
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects
              for some of the best companies around the globe. Our award-winning creations have
              transformed businesses through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      <section className='creations__container'>
        <div className='creations__text__container'>
          <h2 className='creations__header'>OUR CREATIONS</h2>
          <div className='creations__bttn'>SEE ALL</div>
        </div>
        <CreationsCollection />
      </section>
    </>
  );
}
