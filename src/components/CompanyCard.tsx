import CardTile from './CardTile.tsx';
import { useState } from 'react';
import './CompanyCard.scss';

function CompanyCard({
	companyName,
	perks,
	onClickCloseButton,
}: {
	companyName: string;
	perks: Record<string, Record<string, string>>;
	onClickCloseButton: (idx) => {};
}) {
	const closeCard = () => {};
	const [expandAllPerks, setExpandAllPerks] = useState(false);

	const perksCategories = Object.keys(perks);

	return (
		<div className="company-card-container">
			<h2 className="header">{companyName[0].toUpperCase() + companyName.slice(1)}</h2>
			<button className="close-button" type="button" onClick={onClickCloseButton}>
				x
			</button>
			<button className="expand-button" type="button" onClick={() => setExpandAllPerks(!expandAllPerks)}>
				{expandAllPerks ? 'Compress all' : 'Expand all'}
			</button>

			{perksCategories.map((perkCategory) => {
				const { category, tag, text } = perks[perkCategory];
				return <CardTile expandAllPerks={expandAllPerks} category={category} tag={tag} text={text} />;
			})}
		</div>
	);
}

export default CompanyCard;
