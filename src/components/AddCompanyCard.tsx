import CardTile from './CardTile.tsx';
import Search from './Search.tsx';

const AddCompanyCard = () => {
  return (
    <>
      <h2>Add Company</h2>
      <h3>Company Sidebar</h3>
      <p>Add another company to compare perks</p>
      <h3>Perks Sidebar</h3>
      <p>Select a specific perk to compare</p>
      <h3>Company Search</h3>
      <Search />
    </>
  );
};

export default AddCompanyCard;
