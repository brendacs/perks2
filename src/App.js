import './App.css';
import Header from './components/Header.tsx';
import CompanyCard from './components/CompanyCard.tsx';
import perks from './data/perks.json';

import { useState } from 'react';

function App() {
  const companyNameList = Object.keys(perks).sort();
  const firstThree = companyNameList.slice(0, 3);

  const [activeCardsList, setActiveCardsList] = useState(firstThree);

  return (
    <div className="App">
      <Header />
      {activeCardsList.map((name) => (
        <CompanyCard companyName={name} key={name} perks={perks[name]} />
      ))}
    </div>
  );
}

export default App;
