import React, { useState } from "react";
import './plan-card.scss';

import { ExpandButton } from "../Buttons/Buttons";
import ProgressBar from "../ProgressBar/ProgressBar";
import DataRow from "../DataRow/DataRow";
import FormStack from "../FormStack/FormStack";

const PlanCard = ({ zone, planData, onAdd, onDelete, planCardData, isOpen }) => {
	const [isFullSize, setFullSize] = useState(false);
	let className = `plan-card plan-card--${zone}`;
	if (isFullSize) {
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
			<div className={`plan-card__body ${isFullSize ? "show" : "hide"}`}>
				<aside className="plan-card__aside">
					<FormStack
						label="Zaplanuj"
						isFullSize={isFullSize}
						zone={zone}
						planData={planData}
						onAdd={onAdd}
						onDelete={onDelete}
					/>
				</aside>
				<div className={"plan-card__content"}>
					<DataRow
						planCardData={planCardData}
						onDelete={onDelete}
					/>
				</div>
			</div>
			<ExpandButton
				onClick={() => setFullSize(!isFullSize)}
				isFullSize={isFullSize}
				zone={zone}
			/>
		</div>
	)
}

export default PlanCard;