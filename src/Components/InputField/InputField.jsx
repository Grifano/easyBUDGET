import React, { useState } from "react";
import './input-field.scss';

// Type="text"
export const TextField = ({ name, type, value, onChange, placeholder, zone }) => {
	let className = "input-field__text form-stack__input";
	if (zone) {
		className += " form-stack__input" + "--" + zone;
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
export const AmountField = (props) => {

	const [amount, setAmount] = useState({});

	const handleAmount = (e) => {
		const { name, value } = e.target;
		setAmount((prevValue) => {
			return {
				...prevValue,
				[name]: value
			}
		})
	};

	return (
		<input
			className="input-field__number"
			type="number"
			maxLength="5"
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

			// render() {
			// 	return (
			// 		<input
			// 			onChange={this.handleChangeInput}
			// 			value={this.state.form.message}
			// 			type="text"
			// 			className="phone validate"
			// 			name="phone"
			// 			maxLength="11"
			// 		/>
			// 	);
			// }
			// }
			name={props.name}
			//Todo: value should be editable in a future
			value={amount.value} // ? Ask on StackOverflow how to add "curency at the end of amount"
			onChange={props.onChange}
		/>
	)
}