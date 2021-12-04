import React from "react";
import './plan-cards.scss';

import PlanCard from "../PlanCard/PlanCard";

const PlanCards = () => {
	return (
		<section className="plan-cards">
			<div className="plan-cards__item">
				<PlanCard zone="red" />
			</div>
			<div className="plan-cards__item">
				<PlanCard zone="orange" />
			</div>
			<div className="plan-cards__item">
				<PlanCard zone="green" />
			</div>
		</section>
	)
}

export default PlanCards;