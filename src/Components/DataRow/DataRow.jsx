import React, { useState } from "react";
import './data-row.scss';
import { DeleteButton } from "Components/Buttons/Buttons";
import Checkbox from "Components/Checkbox/Checkbox";
import { AmountField } from "Components/InputField/InputField";

const DataRow = ({ planCardData }) => {

	// console.log(planCardData.title);

	return (
		<ul className="data-row">
			<li className="data-row__item flx--grow">
				<p className="data-row__title"></p>
			</li>
			<li className="data-row__item">
				<p className="data-row__ex-date"></p>
			</li>
			<li className="data-row__item">
				<AmountField value={"1000"} /> //! Test!
			</li>
			<li className="data-row__item">
				<Checkbox />
			</li>
			<li className="data-row__item">
				<DeleteButton />
			</li>
		</ul>
	)

}

export default DataRow;