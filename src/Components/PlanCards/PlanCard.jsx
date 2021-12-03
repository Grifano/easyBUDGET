import React, { useState } from "react";
import { ExpandButton } from "../Buttons/Buttons";
import ProgressBar from "../ProgressBar/ProgressBar";
import DataRow from "../DataRow/DataRow";
import FormStack from "../FormStack/FormStack";

const PlanCard = ({ zone }) => {
	const [isFullSize, setFullSize] = useState(true);
	let className = "plan-card" + " plan-card--" + zone;
	if (!isFullSize) {
		className += " fullscreen"
	}

	return (
		<div
			className={className}
		>
			<div className="plan-card__body">
				<aside className="plan-card__aside">
					<ProgressBar
						progress={65}
						zone={zone}
					/>
					<FormStack
						label="Zaplanuj"
						isFullSize={isFullSize}
						zone={zone}
					/>
				</aside>
				<ul
					className={`plan-card__content ${isFullSize ? "hide" : "show"} `}
				>
					<li><DataRow /></li>
					<li><DataRow /></li>
					<li><DataRow /></li>
					<li><DataRow /></li>
					<li><DataRow /></li>
					<li><DataRow /></li>
					<li><DataRow /></li>
					<li><DataRow /></li>
					<li><DataRow /></li>
				</ul>
			</div>
			<ExpandButton
				onClick={() => setFullSize(!isFullSize)}
				isFullSize={isFullSize}
				zone={zone}
			/>
		</div >
	)
}

export default PlanCard;