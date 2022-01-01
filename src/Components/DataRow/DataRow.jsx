import React from "react";
import './data-row.scss';
import { DeleteButton } from "Components/Buttons/Buttons";
import Checkbox from "Components/Checkbox/Checkbox";
import { AmountField } from "Components/InputField/InputField";
import { DateField } from "Components/InputField/InputField";

const DataRow = ({ planCardData, onDelete }) => {

	return (
		<>
			{planCardData.map((item) => (
				<ul className="data-row" key={item.id} >
					<li className="data-row__item flx--grow">
						<p className="data-row__title">{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</p>
					</li>
					<li className="data-row__item">
						<ul className="data-row__data">
							<li>
								<ul className="data-row__data--left">
									<li>
										<DateField value={item.expireDate} />
									</li>
									<li>
										<AmountField
											name={"plannedEarning"}
											value={item.plannedEarning}
										/>
									</li>
								</ul>
							</li>
							<li>
								<ul className="data-row__data--right">
									<li>
										<Checkbox paid={item.isPaid} onChecked={onDelete} />
									</li>
									<li>
										<DeleteButton onDelete={() => onDelete(item.id)} />
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			))
			}
		</>
	)

}

export default DataRow;