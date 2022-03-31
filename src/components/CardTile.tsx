import {useState} from 'react';

type CardTileProps = {
  title: string;
  tag: string;
  text: string;
};

// blah blah blah

function CardTile({title, tag, text}: CardTileProps) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <h3>{title}</h3>
      <span>{tag}</span>
      <p>{text}</p>
      <button type="button" onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? 'Show less' : 'Learn more...'}
      </button>
    </>
  );
}

export default CardTile;
