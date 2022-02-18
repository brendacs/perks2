// import { useState } from 'react';
import CardTile from './CardTile';

const CompanyCard = ({ companyName }: { companyName: string }) => {
  // const [showState, setShowState] = useState(false);
  const closeCard = () => {};
  const expandAllPerks = () => {};

  return (
    <>
      <h2 className="header">{companyName}</h2>
      <button onClick={() => closeCard}>x</button>
      <button onClick={() => expandAllPerks}>Expand all</button>

      {[].map((perk) => {
        const { title, rank, description } = perk;
        return <CardTile title={title} rank={rank} description={description} />;
      })}
    </>
  );
};

export default CompanyCard;
