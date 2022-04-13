import Tag from './Tag.tsx';
import { useState } from 'react';

interface CardTileProps {
	title: string;
	tag: string;
	text: string;
}

function CardTile({ title, tag, text }: CardTileProps) {
	const [showDescription, setShowDescription] = useState(false);
	return (
		<>
			<h3>{title}</h3>
			<p>{text}</p>
			<Tag tag={tag} />
			<p>{text}</p>
			<button type="button" onClick={() => setShowDescription(!showDescription)}>
				{showDescription ? 'Show less' : 'Learn more...'}
			</button>
		</>
	);
}

export default CardTile;
