import React from "react";
import './summary.scss';

import AmountCounter from "../AmountCounter/AmountCounter";
import salaryIcon from "../../Assets/Salary.svg";
import pay from "../../Assets/Pay.svg";
import savings from "../../Assets/Savings.svg";

const Summary = (props) => {
	// const [summaryData, setSummaryData] = useState([]);

	// const handleAmountData = (amountData) => {
	// 	setSummaryData((prevState) => {
	// 		return [...prevState, amountData]
	// 	})
	// }

	return (
		<div className="summary">
			<AmountCounter
				icon={salaryIcon}
				label="Zarobki"
				name="earning"
			// onSubmit={handleAmountData}
			/>
			<AmountCounter
				icon={pay}
				label="Wydatki"
				name="expenses"
			// onSubmit={handleAmountData}
			/>
			<AmountCounter
				icon={savings}
				label="Oszczędnośći"
				name="savings"
			// onSubmit={handleAmountData}
			/>
		</div>
	)


}
export default Summary;