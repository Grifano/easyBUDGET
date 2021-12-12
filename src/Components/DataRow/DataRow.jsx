import React from "react";
import './data-row.scss';
import { DeleteButton } from "Components/Buttons/Buttons";
import Checkbox from "Components/Checkbox/Checkbox";
import { AmountField } from "Components/InputField/InputField";

const DataRow = ({ title, date, earning, checkbox }) => {

	return (
		<ul className="data-row">
			<li className="data-row__item flx--grow">
				<p className="data-row__title">{title.charAt(0).toUpperCase() + title.slice(1)}</p>
			</li>
			<li className="data-row__item">
				<p className="data-row__ex-date">{date}</p>
			</li>
			<li className="data-row__item">
				<AmountField
					name={"plannedEarning"}
					value={earning}
				/>
			</li>
			<li className="data-row__item">
				<Checkbox value={checkbox} />
			</li>
			<li className="data-row__item">
				<DeleteButton />
			</li>
		</ul>
	)

}

export default DataRow;