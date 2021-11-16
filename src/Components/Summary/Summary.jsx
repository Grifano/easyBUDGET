import React, { useState } from "react";
import AmountCounter from "./AmountCounter";
import salaryIcon from "../../Assets/Salary.svg";
import pay from "../../Assets/Pay.svg";
import savings from "../../Assets/Savings.svg";

const Summary = (props) => {
	const [summaryData, setSummaryData] = useState([]);

	const handleAmountData = (amountData) => {
		setSummaryData((prevState) => {
			return [...prevState, amountData]
		})
	}

	// console.log("Test from Summary " + summaryData.map((data) => data.earning));


	return (
		<header className="summary">
			<AmountCounter
				icon={salaryIcon}
				label="Zarobki"
				name="earning"
				onSubmit={handleAmountData}
			/>
			<AmountCounter
				icon={pay}
				label="Wydatki"
				name="expenses"
				onSubmit={handleAmountData}
			/>
			<AmountCounter
				icon={savings}
				label="Zarobki"
				name="savings"
				onSubmit={handleAmountData}
			/>
		</header>
	)


}
export default Summary;