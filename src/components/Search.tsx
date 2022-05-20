import { useState } from 'react';
import { companyNameList } from '../utils/helper.ts';
import './Search.scss';

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
			<input
				className="search"
				placeholder="Find a company"
				onChange={(e) => filterCompanyNameList(e.target.value)}
			/>
			{filteredCompanyNameList.map((companyName) => (
				<button type="button" key={companyName}>
					{companyName}
				</button>
			))}
		</>
	);
}

export default Search;
