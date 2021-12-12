import React, { useState } from "react";
import './input-field.scss';

// Type="text"
export const TextField = ({ name, type, value, onChange, placeholder, zone }) => {
	let className = "input-field__text form-stack__input";
	if (zone) {
		className += `${className} form - stack__input--${zone}`;
	}

	return (
		<input
			className={className}
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}

// Type="number"
export const AmountField = ({ value }) => {

	const [amount, setAmount] = useState(value);

	const handleAmount = (e) => {
		let { name, value } = e.target;
		var currency = 'PLN'; // https://www.currency-iso.org/dam/downloads/lists/list_one.xml
		var options = {
			maximumFractionDigits: 2,
			currency: currency,
			style: "currency",
			currencyDisplay: "symbol"
		}
		if (value || value === 0) {
			value.localStringToNumber(value).toLocaleString(undefined, options)
		}

		console.log(value);

		setAmount((prevValue) => {
			return {
				...prevValue,
				[name]: value
			}
		});

	};


	// // format inital value
	// onBlur({ target: currencyInput })

	// // bind event listeners
	// currencyInput.addEventListener('focus', onFocus)
	// currencyInput.addEventListener('blur', onBlur)


	// function localStringToNumber(s) {
	// 	return Number(String(s).replace(/[^0-9.-]+/g, ""))
	// }

	// function onFocus(e) {
	// 	var value = e.target.value;
	// 	e.target.value = value ? localStringToNumber(value) : ''
	// }

	// function onBlur(e) {
	// 	var value = e.target.value

	// 	var options = {
	// 		maximumFractionDigits: 2,
	// 		currency: currency,
	// 		style: "currency",
	// 		currencyDisplay: "symbol"
	// 	}

	// 	e.target.value = (value || value === 0)
	// 		? localStringToNumber(value).toLocaleString(undefined, options)
	// 		: ''
	// }

	return (
		<input
			className="input-field__number"
			type="currency"
			//Todo: Add a maxLength using this example below
			// class App extends React.Component {
			// 			state={form: { message: ""
			// } };

			// handleChangeInput = event => {
			// 	const { value, maxLength } = event.target;
			// 	const message = value.slice(0, maxLength);

			// 	this.setState({
			// 		form: {
			// 			message
			// 		}
			// 	});
			// };
			name="plannedEarning"
			//Todo: value should be editable in a future
			value={amount}
			onChange={handleAmount}
		/>
	)
}