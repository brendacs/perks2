import { useState } from 'react';
import { companyNameList, sortedPerks } from '../utils/helper.ts';
import './Sidebar.scss';

interface SidebarProps {
	onClickSideBarButton: (companyName) => {};
}

function Sidebar({ onClickSideBarButton }: SidebarProps) {
	// const closeCard = () => {};
	// const [expandAllPerks, setExpandAllPerks] = useState(false);

	return (
		<div className="sidebar-container">
			<h2 className="header">Companies</h2>
			<ul>
				{companyNameList.map((companyName) => (
					<li>
						<button onClick={() => onClickSideBarButton(companyName)}>
							{companyName[0].toUpperCase() + companyName.slice(1)}
						</button>
					</li>
				))}
			</ul>
			<h2 className="header">Perks</h2>
			<ul>
				{sortedPerks.map((perkCategory) => (
					<li>
						<button>{perkCategory}</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Sidebar;
