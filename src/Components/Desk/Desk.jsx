import React, { useState } from "react";
import './desk.scss';
import Aside from "../Aside/Aside";
import Furnitura from "../Fornitura/Furnitura";
import Summary from "Components/Summary/Summary";
import PlanCards from "Components/PlanCards/PlanCards";

const Desk = () => {

	const [planCardData, setPlanCardData] = useState([
		{
			title: "Test",
			expireDate: String,
			plannedEarning: Number,
			isPaid: Boolean
		}
	]);

	function deleteRowData(id) {
		setPlanCardData((prevState) => {
			return prevState.filter((item, index) => {
				return index !== id
			})
		})
	}

	function addNewPlanData(planData) {
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
					<PlanCards
						onAdd={addNewPlanData}
						onDelete={deleteRowData}
						planCardData={planCardData}
					/>
				</section>
			</main>
		</>
	)
}

export default Desk;