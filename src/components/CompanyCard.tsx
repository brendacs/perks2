import CardTile from './CardTile.tsx';

function CompanyCard({
  companyName,
  perks,
}: {
  companyName: string;
  perks: Record<string, Record<string, string>>;
}) {
  const closeCard = () => {};
  const expandAllPerks = () => {};

  const perksCategories = Object.keys(perks);

  return (
    <>
      <h2 className="header">{companyName}</h2>
      <button type="button" onClick={() => closeCard}>x</button>
      <button type="button" onClick={() => expandAllPerks}>Expand all</button>

      {perksCategories.map((perkCategory) => {
        const { title, tag, text } = perks[perkCategory];
        return <CardTile title={title} tag={tag} text={text} />;
      })}
    </>
  );
}

export default CompanyCard;
