import React from "react";
import './plan-cards.scss';

import PlanCard from "../PlanCard/PlanCard";

const PlanCards = ({ onSubmit, planCardData, onAdd, onDelete }) => {

	return (
		<section className="plan-cards">
			<div className="plan-cards__item">
				<PlanCard
					zone="red"
					planCardData={planCardData}
					onSubmit={onSubmit}
					onAdd={onAdd}
					onDelete={onDelete}/>
			</div>
			<div className="plan-cards__item">
				<PlanCard
					zone="orange"
					planCardData={planCardData}
					onSubmit={onSubmit}
					onAdd={onAdd}
					onDelete={onDelete}
				/>
			</div>
			<div className="plan-cards__item">
				<PlanCard
					zone="green"
					planCardData={planCardData}
					onSubmit={onSubmit}
					onAdd={onAdd}
					onDelete={onDelete}
				/>
			</div>
		</section>
	)
}

export default PlanCards;