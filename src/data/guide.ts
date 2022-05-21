interface GuideItem {
  excellent: string;
  good: string;
  fair: string;
  poor: string;
  none: string;
}

interface Guide {
  comp: GuideItem;
  vac: GuideItem;
  pto: GuideItem;
  meals: GuideItem;
  snacks: GuideItem;
  drinks: GuideItem;
  retire: GuideItem;
  health: GuideItem;
  mental: GuideItem;
  spons: GuideItem;
  holiday: GuideItem;
  phone: GuideItem;
  charity: GuideItem;
  commute: GuideItem;
  leave: GuideItem;
  child: GuideItem;
  fam: GuideItem;
  onsite: GuideItem;
  rec: GuideItem;
  edu: GuideItem;
  insurance: GuideItem;
  hsa: GuideItem;
  misc: GuideItem;
}

const guide: Guide = {
  comp: {
    excellent: 'Large yearly cash bonuses, raises, and stock refreshers (target is 20+% of TC)',
    good: 'Yearly cash bonuses, raises, or stock refreshers (target is 10 - 20% of TC)',
    fair: 'Either yearly cash bonuses, raises, or stock refreshers (target 0 - 10% of TC)',
    poor: 'Raises matching or around the rate of inflation (2.0%)',
    none: 'No raises',
  },
  vac: {
    excellent: 'Unlimited',
    good: '15 - 21 days',
    fair: '10 - 14 days',
    poor: '0 - 9 days',
    none: 'None',
  },
  pto: {
    excellent: 'Unlimited or 12+',
    good: '9 - 11 days',
    fair: '8 days',
    poor: '4 - 7 days',
    none: '0 - 3 days',
  },
  meals: {
    excellent: 'Free breakfast, lunch & dinner (3/3 meals)',
    good: '2 of free breakfast, lunch or dinner (2/3 meals)',
    fair: '1 of free breakfast, lunch or dinner (1/3 meals)',
    poor: 'No free food but subsidized meals',
    none: 'No free food',
  },
  snacks: {
    excellent: 'Fully stocked snack area (extensive quantity and quality of all varieties of snacks)',
    good: 'Mostly stocked snack area (most common brands of snacks, usually unhealthy snacks, some healthy snacks)',
    fair: 'Consistent snack stock (usually org-managed ie. leadership-organized)',
    poor: 'Inconsistent snack stock (usually team-managed ie. manager-organzied)',
    none: 'No snacks',
  },
  drinks: {
    excellent: 'Extensive variety of drinks, fridges fully stocked, gourmet drink machines like multi-purpose cafe machines, smoothie machines etc.',
    good: 'Large variety of drinks (soda, coffee, juice, beer, etc.), possibly some custom drink machines',
    fair: 'Some drinks (coffee, milk, soda, juice, beer, etc.)',
    poor: 'A limited variety or inconsistent stock of drinks (coffee, milk, soda, tea)',
    none: 'Only coffee, tea bags, or nothing',
  },
  retire: {
    excellent: '25+% match',
    good: '15 - 24%',
    fair: '5 - 14%',
    poor: '1 - 4% (the median match is 3% in America but it\'s much higher in the tech industry)',
    none: '0%',
  },
  health: {
    excellent: 'Credits or reimbursements for health & wellness expenses ($500+/yr), onsite facilities, or free memberships',
    good: 'Credits or reimbursements for health & wellness expenses ($500+/yr)',
    fair: 'Credits or reimbursements for health & wellness expenses ($100 - $499/yr)',
    poor: 'Discounts or tax benefits for health & wellness (0 - $100/yr)',
    none: 'None',
  },
  mental: {
    excellent: 'Unlimited access in excess of insurance',
    good: 'Large number of session covered in excess of insurance',
    fair: 'Covered under insurance',
    poor: 'Discounted or subsidized under insurance',
    none: 'None',
  },
  spons: {
    excellent: 'Will sponsor immediately',
    good: 'Will sponsor after 0 - 3 months',
    fair: 'Will sponsor after 4 - 6 months',
    poor: 'Will sponsor after 6+ months',
    none: 'Will not sponsor',
  },
  holiday: {
    excellent: '12 holidays (all holidays + week-long shutdowns)',
    good: '10 - 12 holidays (all holidays & some floating days after holidays)',
    fair: '9 holidays (all federal holidays & most optional holidays)',
    poor: '7 - 8 holidays (all federal holidays & some optional holidays)',
    none: '6 holidays (just federal holidays)',
  },
  phone: {
    excellent: '$65+/month',
    good: '$50 - $64/month',
    fair: '$31 - $49/month',
    poor: '$1 - $30/month',
    none: 'None',
  },
  charity: {
    excellent: '$5000+/yr',
    good: '$2500 to $4999/yr',
    fair: '$1000 to $2499/yr',
    poor: '0 to $999/yr',
    none: 'None',
  },
  commute: {
    excellent: 'Company shuttle, unlimited passes or full subsidy of public transport, ridesharing $250+/month, free parking',
    good: 'Company shuttle, Mostly subsidized public transport, ridesharing, or parking',
    fair: 'Company shuttle, Discounted or partially subsidized public transport, ridesharing, or parking',
    poor: 'Limited subsidies or limited number of tokens for public transport or ridesharing, no free parking',
    none: 'None',
  },
  leave: {
    excellent: 'Leave 4+ months paid leave, no restrictions, additional cash bonus',
    good: '4+ months paid leave',
    fair: '3 months paid leave',
    poor: '2 months paid leave',
    none: '1 month paid leave or none',
  },
  child: {
    excellent: 'Cash & subsidies for in-home or out of home child care ($2000+ value/yr)',
    good: 'Subsidies for in-home or out of home child care ($1000+/yr)',
    fair: 'Subsidies for in-home or out of home child care (up to $1000/yr)',
    poor: 'Discount for in-home or out of home child care (up to $500/yr)',
    none: 'None',
  },
  fam: {
    excellent: 'Extensive coverage of adoption and/or surrogacy and/or IVF, significant subsidies ($20000+)',
    good: 'Great coverage of adoption and/or surrogacy and/or IVF ($10000+)',
    fair: 'Some coverage of adoption and/or surrogacy and/or IVF (~$5000)',
    poor: 'Limited coverage or coverage on 1 of adoption, surrogacy or IVF (~$2000)',
    none: 'None'
  },
  onsite: {
    excellent: 'Extensive, modern facilities covering multiple chores or healthcare needs. Doctors on call, health care centers, massage facilities etc.',
    good: 'Facilities covering some healthcare or personal needs. Facilities are high quality but not top notch',
    fair: 'Facilities are just for work. Buildings are modern and in respectable neighbourhoods',
    poor: 'Buildings are old, medium sized, in off neighbourhoods, no ammenities',
    none: 'Buildings are run down, small, crowded, in dangerous neighbourhoods, no ammenities',
  },
  rec: {
    excellent: 'All office sports and more activities (ping pong tables, foosball tables, video games)',
    good: 'Most office sports or activities, still widely available',
    fair: 'Some office sports or activities depends on location',
    poor: 'Very few office sports or activities (i.e. 1 foosball table) or depends on org/team',
    none: 'None',
  },
  edu: {
    excellent: '$10000+ benefit/yr',
    good: '$5000 - $9999/yr',
    fair: '$1000 - $4999/yr',
    poor: '$1 - $999/yr',
    none: 'None',
  },
  insurance: {
    excellent: 'Free basic coverage & low deductibleg',
    good: 'Free basic coverage',
    fair: 'Paid basic coverage & low deductible',
    poor: 'Paid basic coverage & high deductible',
    none: 'None',
  },
  hsa: {
    excellent: 'Company provides contributions ($1000+)',
    good: 'Company provides contributions ($750+)',
    fair: 'Company provides contributions ($500+)',
    poor: 'Company provides contributions ($250+)',
    none: 'None',
  },
  misc: {
    excellent: 'Large monetary or personal benefit',
    good: 'Some monetary or personal benefit',
    fair: 'Monetary or personal benefit with some restrictions',
    poor: 'Monetary or personal benefit with restrictions, is uncommon, forced, or not transferrable',
    none: 'None',
  }
};

export default guide;
