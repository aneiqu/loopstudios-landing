interface propsType {
  text: string;
  imgLarge: string;
  imgSmall: string;
}

export default function Card({ text, imgLarge, imgSmall }: propsType) {
  return (
    <div className='card__container'>
      <picture>
        <source media='(min-width: 1439px)' srcSet={imgLarge} />
        <img src={imgSmall} />
      </picture>
      <span className='card__text'>{text}</span>
    </div>
  );
}
