import Search from './Search.tsx';
import './AddCompanyCard.scss';

function AddCompanyCard() {
	return (
		<div className="company-card-container empty">
			<h2 className="header">Add Company</h2>
			<h3>Company Sidebar</h3>
			<p>Add another company to compare perks</p>
			<h3>Perks Sidebar</h3>
			<p>Select a specific perk to compare</p>
			<h3>Company Search</h3>
			<Search />
		</div>
	);
}

export default AddCompanyCard;
