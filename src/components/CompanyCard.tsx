import CardTile from './CardTile.tsx';
import './CompanyCard.scss';

function CompanyCard({ companyName, perks }: { companyName: string; perks: Record<string, Record<string, string>> }) {
	const closeCard = () => {};
	const expandAllPerks = () => {};

	const perksCategories = Object.keys(perks);

	return (
		<div className="company-card-container">
			<h2 className="header">{companyName[0].toUpperCase() + companyName.slice(1)}</h2>
			<button className="close-button" type="button" onClick={() => closeCard}>
				x
			</button>
			<button className="expand-button" type="button" onClick={() => expandAllPerks}>
				Expand all
			</button>

			{perksCategories.map((perkCategory) => {
				const { title, tag, text } = perks[perkCategory];
				return <CardTile title={title} tag={tag} text={text} />;
			})}
		</div>
	);
}

export default CompanyCard;
