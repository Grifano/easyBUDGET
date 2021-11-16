import React, { useState } from "react";

const AmountCounter = (props) => {
	const [amountData, setAmountData] = useState({
		earning: 0.00,
		expenses: 0.00,
		savings: 0.00
	});
	const [isAddHiden, setAddHiden] = useState(true);

	const showAddButton = (e) => {
		setAddHiden(!isAddHiden);
		console.log(isAddHiden);
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

	console.log(props.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		setAddHiden(!isAddHiden);
		return props.onSubmit(amountData);
	}

	// console.log("Test from AomuntCounter " + props.value);

	return (

		// idea for changing className
		// <input className={this.state.editable ? "edit-profile" : "disable-profile disable"}

		<form className="summary__form" onSubmit={handleSubmit}>
			<fieldset className="summary__fieldset">
				<div className="summary__input-wrapper">
					<img src={props.icon} alt="" />
					<input
						className={isAddHiden ? "summary__input hiden" : "summary__input"}
						name={props.name}
						type="number"
						step="0.01"
						onChange={handleChanges}
						onClick={showAddButton}
						value={amountData.earning}
					/>
					<button
						type="submit"
						className={isAddHiden ? "summary__button hiden" : "summary__button"}
					>AddButton
					</button>
				</div>
				<label className="summary__label" htmlFor={props.name}>{props.label}</label>
			</fieldset>
		</form>
	)
}

export default AmountCounter;