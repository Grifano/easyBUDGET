import React, { useState } from "react";
import './amountCounter.scss';

const AmountCounter = (props) => {
	const [amountData, setAmountData] = useState({
		earning: 0.00,
		expenses: 0.00,
		savings: 0.00
	});
	const [isAddHiden, setAddHiden] = useState(true);

	const showAddButton = (e) => {
		setAddHiden(!isAddHiden);
	}

	const handleChanges = (event) => {
		const { value, name } = event.target;

		setAmountData((prevState) => {
			return (
				{
					...prevState,
					[name]: value
				}
			)
		})

	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setAddHiden(!isAddHiden);
		return props.onSubmit(amountData);
	}

	return (

		<form className="amount-counter__form" onSubmit={handleSubmit}>
			<fieldset className="amount-counter__fieldset">
				<div className="amount-counter__input-wrapper">
					<img src={props.icon} alt="" />
					<input
						className={isAddHiden ? "amount-counter__input hiden" : "amount-counter__input"}
						name={props.name}
						type="number"
						step="0.01"
						onChange={handleChanges}
						onClick={showAddButton}
						value={amountData.earning}
					/>
					<button
						type="submit"
						className={isAddHiden ? "amount-counter__button hiden" : "amount-counter__button"}
					>AddButton
					</button>
				</div>
				<label className="amount-counter__label" htmlFor={props.name}>{props.label}</label>
			</fieldset>
		</form>
	)
}

export default AmountCounter;