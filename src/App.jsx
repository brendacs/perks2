import './App.css';
import { useState } from 'react';
import Header from './components/Header.tsx';
import CompanyCard from './components/CompanyCard.tsx';
import perks from './data/perks.json';
import { companyNameList } from './utils/helper.ts';

import AddCompanyCard from './components/AddCompanyCard.tsx';

function App() {
  const firstThree = companyNameList.slice(0, 3);

  const [activeCardsList, setActiveCardsList] = useState(firstThree);

  return (
    <div className="App">
      <Header />
      {activeCardsList.map((name) => (
        <CompanyCard companyName={name} key={name} perks={perks[name]} />
      ))}
      <AddCompanyCard />
    </div>
  );
}

export default App;
