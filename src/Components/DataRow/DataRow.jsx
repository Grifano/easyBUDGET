import React from "react";
import './data-row.scss';
import { DeleteButton } from "Components/Buttons/Buttons";
import Checkbox from "Components/Checkbox/Checkbox";
import { AmountField } from "Components/InputField/InputField";

const DataRow = ({ planCardData, onDelete }) => {

	return (
		<div >
			{planCardData.map((data, index) => (
				<ul className="data-row" key={index}>
					<li className="data-row__item flx--grow">
						<p className="data-row__title">{data.title.charAt(0).toUpperCase() + data.title.slice(1)}</p>
					</li>
					<li className="data-row__item">
						<p className="data-row__ex-date">{data.date}</p>
					</li>
					<li className="data-row__item">
						<AmountField
							name={"plannedEarning"}
							value={data.plannedEarning}
						/>
					</li>
					<li className="data-row__item">
						<Checkbox paid={data.isPaid} onChecked={onDelete} />
					</li>
					<li className="data-row__item">
						<DeleteButton onDelete={() => onDelete(index)} />
					</li>
				</ul>
			))}
		</div>
	)

}

export default DataRow;