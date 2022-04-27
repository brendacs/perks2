import { useState } from 'react';
import { companyNameList } from '../utils/helper.ts';

function Search() {
	const [filteredCompanyNameList, setFilteredCompanyNameList] = useState([]);

	const filterCompanyNameList = (value): void => {
		if (value == '') {
			return setFilteredCompanyNameList([]);
		}

		const filteredList = companyNameList.filter((companyName) => companyName.startsWith(value));
		setFilteredCompanyNameList(filteredList);
	};

	return (
		<>
			<input placeholder="Find a company" onChange={(e) => filterCompanyNameList(e.target.value)} />
			{filteredCompanyNameList.map((companyName) => (
				<button type="button" key={companyName}>
					{companyName}
				</button>
			))}
		</>
	);
}

export default Search;
