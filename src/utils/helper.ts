import perks from '../data/perks.json';

export const companyNameList = Object.keys(perks).sort();

const firstCompanyName = companyNameList[0];
export const perksKeys = Object.keys(perks[firstCompanyName]);
export const sortedPerks = perksKeys.map((key) => perks[firstCompanyName][key].category).sort();
