import './Tag.scss';

const nameToColorMap = {
	excellent: '#54D15D',
	fair: '#E2E222',
	good: '#62EF88',
	none: '#E54445',
	poor: '#F1943C',
};

interface TagProps {
	tag: string;
}

const Tag = ({ tag }: TagProps) => {
	return (
		<span className="tag" style={{ background: nameToColorMap[tag.toLowerCase()] }}>
			{tag}
		</span>
	);
};

export default Tag;
