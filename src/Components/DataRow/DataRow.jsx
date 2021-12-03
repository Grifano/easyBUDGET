import React, { useState } from "react";
import './dataRow.scss';
import { DeleteButton } from "Components/Buttons/Buttons";
import Checkbox from "Components/Checkbox/Checkbox";
import { AmountField } from "Components/Assets/InputField";

const DataRow = (props) => {
	const [dataRowData, setDataRowData] = useState({
		id: "",
		title: "Rent",
		exDate: "08.11.21",
		amount: Number,
		payed: false
	});

	return (
		<ul className="data-row">
			<li className="data-row__item flx--grow">
				<p className="data-row__title">{dataRowData.title}</p>
			</li>
			<li className="data-row__item">
				<p className="data-row__ex-date">{dataRowData.exDate}</p>
			</li>
			<li className="data-row__item">
				<AmountField value={dataRowData.amount} />
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