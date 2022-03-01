import { useState } from 'react';

type CardTileProps = {
  title: string;
  tag: string;
  text: string;
};

const CardTile = ({ title, tag, text }: CardTileProps) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <h3>{title}</h3>
      <span>{tag}</span>
      <p>{text}</p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? 'Show less' : 'Learn more...'}
      </button>
    </>
  );
};

export default CardTile;
