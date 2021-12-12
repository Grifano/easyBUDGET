import React, { useState } from "react";
import './desk.scss';
import Aside from "../Aside/Aside";
import Furnitura from "../Fornitura/Furnitura";
import Summary from "Components/Summary/Summary";
import PlanCards from "Components/PlanCards/PlanCards";

const Desk = () => {
	const [planCardData, setPlanCardData] = useState([
		{
			title: "",
			expireDate: String,
			plannedEarning: Number,
			isPaid: false
		}
	]);

	function addNewPlanData(planData) {
		console.log("Test is submit?");
		setPlanCardData((prevState) => {
			return [...prevState, planData]
		})
	};

	return (
		<>
			<Furnitura position_1={"top"} position_2={"left"} />
			<Furnitura position_1={"top"} position_2={"right"} />
			<Furnitura position_2={"right"} />
			<Furnitura position_2={"left"} />

			<main className="desk">
				<Aside />
				<section className="desk__content">
					<Summary />
					<PlanCards onAdd={addNewPlanData} planCardData={planCardData} />
				</section>
			</main>
		</>
	)
}

export default Desk;