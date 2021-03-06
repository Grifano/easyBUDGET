import React, { useState } from "react";

// Styles
import './desk.scss';

// Embeded components
import Summary from "Components/Summary/Summary";
import Footer from "Components/Footer/Footer";
import PlanCards from "Components/PlanCards/PlanCards";

// Component body
const Desk = ({ isMobile }) => {
	let classNameElem = "desk__content"

	const [isOpen, setOpen] = useState(false)
	const [planCardData, setPlanCardData] = useState([
		{
			id: 1,
			title: "This is a most long title ogf the whole project. And if you whant more?",
			expireDate: "2020.05.10",
			plannedEarning: 100,
			isPaid: false
		},
		{
			id: 2,
			title: "Test 2",
			expireDate: "2021.03.20",
			plannedEarning: 200,
			isPaid: false
		},
		{
			id: 3,
			title: "Test 3",
			expireDate: "2021.03.20",
			plannedEarning: 300,
			isPaid: false
		},
		{
			id: 4,
			title: "Test 3",
			expireDate: "2021.03.20",
			plannedEarning: 300,
			isPaid: false
		},
		{
			id: 5,
			title: "Test 3",
			expireDate: "2021.03.20",
			plannedEarning: 300,
			isPaid: false
		},
		{
			id: 6,
			title: "Test 3",
			expireDate: "2021.03.20",
			plannedEarning: 300,
			isPaid: false
		},
		{
			id: 7,
			title: "Test 3",
			expireDate: "2021.03.20",
			plannedEarning: 300,
			isPaid: false
		},
		{
			id: 8,
			title: "Test 3",
			expireDate: "2021.03.20",
			plannedEarning: 300,
			isPaid: false
		}
	]);

	// If the PlanCard is open add a popup-bg class to darken background
	if (isOpen) {
		classNameElem += " popup-bg"
	}

	// Make a bg darkness when a PlanCard is opened
	function overlaying() {
		setOpen(!isOpen)
	}

	// Delete the current DataRow
	function deleteRowData(id) {
		setPlanCardData((prevState) => {
			return prevState.filter((item) => {
				return item.id !== id
			})
		})
	}

	// Add new DataRow
	function addNewPlanData(planData) {
		setPlanCardData((prevState) => {
			return [...prevState, planData]
		})
	};

	return (
		<>
			<main className="desk">
				<section className={classNameElem}>
					{!isMobile ? <Summary /> : null}
					<PlanCards
						onAdd={addNewPlanData}
						onDelete={deleteRowData}
						planCardData={planCardData}
						isOpen={overlaying}
					/>
				</section>
				<Footer />
			</main>
		</>
	)
}

export default Desk;