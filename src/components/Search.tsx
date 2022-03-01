import {useState} from 'react';
import {companyNameList} from '../utils/helper.ts';

const Search = () => {
  const [filteredCompanyNameList, setFilteredCompanyNameList] = useState([]);

  const filterCompanyNameList = (value): void => {
    const filteredList = companyNameList.filter((companyName) => (
      companyName.startsWith(value)
    ));
    setFilteredCompanyNameList(filteredList);
  };

  return (
    <>
      <input
        placeholder="Find a company"
        onChange={(e) => filterCompanyNameList(e.target.value)}
      />
      {filteredCompanyNameList.map((companyName) => {
        return (
          <button key={companyName}>{companyName}</button>
        );
      })}
    </>
  );
};

export default Search;
