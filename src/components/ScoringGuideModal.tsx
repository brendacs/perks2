// import 'ScoringGuideModal.scss';
import guide from '../data/guide.ts';
import Tag from './Tag.tsx';
import './ScoringGuideModal.scss';

function ScoringGuideDataRows() {
	return (
		<>
			{Object.keys(guide).map((category) => (
				<tr key={category}>
					<td>{guide[category].title}</td>
					<td>{guide[category].excellent}</td>
					<td>{guide[category].good}</td>
					<td>{guide[category].fair}</td>
					<td>{guide[category].poor}</td>
					<td>{guide[category].none}</td>
				</tr>
			))}
		</>
	);
}

interface ScoringGuideModalProps {
	close: () => {};
}

function ScoringGuideModal({ close }: ScoringGuideModalProps) {
	return (
		<>
			<div className="guide-modal">
				<button onClick={close}>X</button>
				<h1>Scoring Guide</h1>
				<h2>
					There is no exact way to evaluate benefits. However, we try to create rankings that reflect the packages
					as objectively as possible. The criteria by which we rate benefits is charted out below. If there are
					multiple components to a benefit, the scores for each component are averaged.
				</h2>
				<table>
					<tr>
						<th>Category</th>
						<th>
							<Tag name="Excellent"></Tag>
						</th>
						<th>
							<Tag name="Good"></Tag>
						</th>
						<th>
							<Tag name="Fair"></Tag>
						</th>
						<th>
							<Tag name="Poor"></Tag>
						</th>
						<th>
							<Tag name="None"></Tag>
						</th>
					</tr>
					<ScoringGuideDataRows />
				</table>
			</div>
			{/** Style this next time */}
			<p>Click anywhere to close</p>
		</>
	);
}

export default ScoringGuideModal;
