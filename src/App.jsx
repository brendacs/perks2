import { useState } from 'react';
// import AddCompanyCard from './components/AddCompanyCard.tsx';
import Header from './components/Header.tsx';
import CompanyCard from './components/CompanyCard.tsx';
import perks from './data/perks.json';
import { companyNameList } from './utils/helper.ts';
import Sidebar from './components/Sidebar.tsx';
import './App.scss';
import { render } from '@testing-library/react';

function App() {
	const firstThree = companyNameList.slice(0, 3);
	const [activeCardsList, setActiveCardsList] = useState(firstThree);

	const onClickSideBarButton = (companyName) => {
		// If (there are already three cards in the activeCardsList)
		if (activeCardsList.length == 3) {
			// Show an alert and don't do anything else, maybe return early
			alert('Already have 3 cards');
			// If (the company was already in the list)
		} else if (activeCardsList.includes(companyName)) {
			// Show an alert and don't do anything, return early
			alert('Company already included');
		} else {
			// Push a company to the activeCardsList
			// Use setActiveCardsList to do that
			setActiveCardsList([...activeCardsList, companyName]);
		}
	};

	const onClickCloseButton = (idx) => {
		let cards = activeCardsList;
		cards.splice(idx, 1);
		setActiveCardsList(cards);
		console.log(cards);
	};

	return (
		<div className="app">
			<div>
				<Header />
				<div className="company-cards">
					{activeCardsList.map((name, idx) => (
						<CompanyCard
							companyName={name}
							key={name}
							perks={perks[name]}
							onClickCloseButton={() => onClickCloseButton(idx)}
						/>
					))}
				</div>
				{/* <AddCompanyCard /> */}
			</div>
			<div className="side-bar">
				<Sidebar onClickSideBarButton={onClickSideBarButton} />
			</div>
		</div>
	);
}

export default App;
