import { useState } from "react";

const Score = ({ score, handleUpdateScore }) => {
	const [diff, setDiff] = useState(0);

	const updateScore = (e, newDiff) => {
		e.preventDefault();
		if (newDiff === diff) {
			handleUpdateScore(score - diff);
			setDiff(0);
		} else if (diff) {
			handleUpdateScore(score + 2 * newDiff);
			setDiff(newDiff);
		} else {
			handleUpdateScore(score + newDiff);
			setDiff(newDiff);
		}
	};

	return (
		<div className="vote-box bg-vl-gray">
			<button
				className={`fw-l fs-m ${diff === 1 ? "clr-blue" : "clr-l-gray-blue"}`}
				onClick={(e) => updateScore(e, 1)}
			>
				+
			</button>
			<div className="fw-l fs-s clr-blue">{score}</div>
			<button
				className={`fw-l fs-m ${diff === -1 ? "clr-blue" : "clr-l-gray-blue"}`}
				onClick={(e) => updateScore(e, -1)}
			>
				–
			</button>
		</div>
	);
};

export default Score;
