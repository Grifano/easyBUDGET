import React from "react";
import './data-row.scss';
import { DeleteButton } from "Components/Buttons/Buttons";
import Checkbox from "Components/Checkbox/Checkbox";
import { AmountField } from "Components/InputField/InputField";

const DataRow = ({ planCardData, onDelete }) => {

	return (
		<div >
			{planCardData.map((item) => (
				<ul className="data-row" key={item.id}>
					<li className="data-row__item flx--grow">
						<p className="data-row__title">{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</p>
					</li>
					<li className="data-row__item">
						<p className="data-row__ex-date">{item.date}</p>
					</li>
					<li className="data-row__item">
						<AmountField
							name={"plannedEarning"}
							value={item.plannedEarning}
						/>
					</li>
					<li className="data-row__item">
						<Checkbox paid={item.isPaid} onChecked={onDelete} />
					</li>
					<li className="data-row__item">
						<DeleteButton onDelete={() => onDelete(item.id)} />
					</li>
				</ul>
			))}
		</div>
	)

}

export default DataRow;