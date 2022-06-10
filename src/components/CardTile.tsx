import Tag from './Tag.tsx';
import { useState } from 'react';
import './CardTile.scss';

interface CardTileProps {
	expandAllPerks: boolean;
	category: string;
	tag: 'Excellent' | 'Fair' | 'Good' | 'Poor' | 'None';
	text: string;
}

function CardTile({ expandAllPerks, category, tag, text }: CardTileProps) {
	const [showDescription, setShowDescription] = useState(false);
	return (
		<div className="card-tile">
			<h1>{category}</h1>
			<Tag name={tag} />
			{(showDescription || expandAllPerks) && <p>{text}</p>}
			{!expandAllPerks && (
				<button className="description-toggle" type="button" onClick={() => setShowDescription(!showDescription)}>
					{showDescription ? 'Show less' : 'Learn more...'}
				</button>
			)}
		</div>
	);
}

export default CardTile;
