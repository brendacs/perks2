import { useState } from 'react';

type CardTileProps = {
  title: string;
  rank: string;
  description: string;
};

const CardTile = ({ title, rank, description }: CardTileProps) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <h3>{title}</h3>
      <span>{rank}</span>
      <p>{description}</p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? 'Show less' : 'Learn more...'}
      </button>
    </>
  );
};

export default CardTile;
