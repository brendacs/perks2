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
	// 1. When I click the side bar button it should render a <CompanyCard/>
	//     a. The button should take an onClick function that does stuff

	const onClickSideBarButton = (companyName) => {
		// Push a company to the activeCardsList
		// Use setActiveCardsList to do that
		// If (there are already three cards in the activeCardsList)
		// Show an alert and don't do anything else, maybe return early
		// If (the company was already in the list)
		// Show an alert and don't do anything, return early
	};

	const firstThree = companyNameList.slice(0, 3);
	const [activeCardsList, setActiveCardsList] = useState(firstThree);

	return (
		<div className="app">
			<div>
				<Header />
				<div className="company-cards">
					{activeCardsList.map((name) => (
						<CompanyCard companyName={name} key={name} perks={perks[name]} />
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
