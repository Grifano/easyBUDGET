import React, { useState } from "react";
import './plan-card.scss';

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
			<ProgressBar
				progress={65}
				zone={zone}
			/>
			<div className={`plan-card__body ${isFullSize ? "hide" : "show"}`}>
				<aside className="plan-card__aside">
					<FormStack
						label="Zaplanuj"
						isFullSize={isFullSize}
						zone={zone}
					/>
				</aside>
				<ul
					className={"plan-card__content"}
				>
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