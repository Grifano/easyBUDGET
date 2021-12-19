import React, { useState } from "react";
import './desk.scss';
// import Furnitura from "../Fornitura/Furnitura";
import Summary from "Components/Summary/Summary";
import Footer from "Components/Footer/Footer";
import PlanCards from "Components/PlanCards/PlanCards";

const Desk = ({ isMobile }) => {
	const [isOpen, setOpen] = useState(false)
	const [planCardData, setPlanCardData] = useState([
		{
			id: 1,
			title: "Test",
			expireDate: "01.01.2021",
			plannedEarning: 100,
			isPaid: false
		},
		{
			id: 2,
			title: "Test 2",
			expireDate: "02.01.2021",
			plannedEarning: 200,
			isPaid: false
		},
		{
			id: 3,
			title: "Test 3",
			expireDate: "03.01.2021",
			plannedEarning: 300,
			isPaid: false
		}
	]);

	function deleteRowData(id) {
		setPlanCardData((prevState) => {
			return prevState.filter((item) => {
				return item.id !== id
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
			{/* <Furnitura position_1={"top"} position_2={"left"} />
			<Furnitura position_1={"top"} position_2={"right"} />
			<Furnitura position_2={"right"} />
			<Furnitura position_2={"left"} /> */}

			<main className="desk">
				<section className="desk__content">
					{!isMobile ? <Summary /> : null}
					<PlanCards
						onAdd={addNewPlanData}
						onDelete={deleteRowData}
						planCardData={planCardData}
						isOpen={isOpen}
					/>
				</section>
				<Footer />
			</main>
		</>
	)
}

export default Desk;