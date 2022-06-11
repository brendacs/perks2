import { useState } from 'react';
import AddCompanyCard from './components/AddCompanyCard.tsx';
import Header from './components/Header.tsx';
import CompanyCard from './components/CompanyCard.tsx';
import perks from './data/perks.json';
import { companyNameList } from './utils/helper.ts';
import Sidebar from './components/Sidebar.tsx';
import ScoringGuideModal from './components/ScoringGuideModal.tsx';
import './App.scss';

const EMPTY_CARD = 'empty';

function App() {
	const firstThree = companyNameList.slice(0, 3);
	const [activeCardsList, setActiveCardsList] = useState(firstThree);
	const [showModal, setShowModal] = useState(false);

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
		let cards = [...activeCardsList];
		cards.splice(idx, 1);
		cards.push(EMPTY_CARD);
		setActiveCardsList(cards);
	};

	return (
		<>
			<div className="app">
				<Header />
				<div className="app-content">
					<div className="company-cards">
						{activeCardsList.map((name, idx) => {
							if (name === 'empty') {
								return <AddCompanyCard />;
							}
							return (
								<CompanyCard
									companyName={name}
									key={name}
									perks={perks[name]}
									onClickCloseButton={() => onClickCloseButton(idx)}
								/>
							);
						})}
					</div>
					<div className="side-bar">
						<Sidebar onClickSideBarButton={onClickSideBarButton} />
					</div>
					<div>{showModal && <ScoringGuideModal />}</div>
					<button className="modal-button" onClick={() => setShowModal(!showModal)}>?</button>
				</div>
			</div>
			{showModal && <div className="overlay" />}
		</>
	);
}

export default App;
