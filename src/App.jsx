import { useState } from 'react';
// import AddCompanyCard from './components/AddCompanyCard.tsx';
import Header from './components/Header.tsx';
import CompanyCard from './components/CompanyCard.tsx';
import perks from './data/perks.json';
import { companyNameList } from './utils/helper.ts';
import Sidebar from './components/Sidebar.tsx';
import './App.scss';

function App() {

	// 1. when I click the side bar button it should render a <Companycard/>
	//     a. the button should take an onClick function that does stuff
	//

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
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
