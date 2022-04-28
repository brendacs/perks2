import { useState } from 'react';
// import AddCompanyCard from './components/AddCompanyCard.tsx';
import Header from './components/Header.tsx';
import CompanyCard from './components/CompanyCard.tsx';
import perks from './data/perks.json';
import { companyNameList } from './utils/helper.ts';
import Sidebar from './components/Sidebar.tsx';
import './App.scss';

function App() {
	const firstThree = companyNameList.slice(0, 3);

	const [activeCardsList, setActiveCardsList] = useState(firstThree);

	return (
		<div className="App">
			<Header />
			<div className="company-cards">
				{activeCardsList.map((name) => (
					<CompanyCard companyName={name} key={name} perks={perks[name]} />
				))}
			</div>
			{/* <AddCompanyCard /> */}
			<div className="side-bar">
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
