import Tag from './Tag.tsx';
import { useState } from 'react';
import './CardTile.scss';

interface CardTileProps {
	expandAllPerks: boolean;
	category: string;
	tag: string;
	text: string;
}

function CardTile({ expandAllPerks, category, tag, text }: CardTileProps) {
	const [showDescription, setShowDescription] = useState(false);
	return (
		<>
			<h1>{category}</h1>
			<Tag tag={tag} />
			{(showDescription || expandAllPerks) && <p>{text}</p>}
			<button className="description-toggle" type="button" onClick={() => setShowDescription(!showDescription)}>
				{showDescription ? 'Show less' : 'Learn more...'}
			</button>
		</>
	);
}

export default CardTile;
