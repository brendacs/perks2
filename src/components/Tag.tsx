import './Tag.scss';

const nameToColorMap = {
	excellent: '#54D15D',
	fair: '#E2E222',
	good: '#62EF88',
	none: '#E54445',
	poor: '#F1943C',
};

interface TagProps {
	name: 'Excellent' | 'Fair' | 'Good' | 'Poor' | 'None';
}

const Tag = ({ name }: TagProps) => {
	return (
		<span className="tag" style={{ background: nameToColorMap[name.toLowerCase()] }}>
			{name}
		</span>
	);
};

export default Tag;
