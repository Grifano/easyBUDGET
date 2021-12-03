import React, { useState } from "react";

// Type="text"
export const TextField = (props) => {

	const placeholderValue = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<input
			className="input-field--text form-stack__input"
			type="text"
			name={props.name}
			// placeholder={placeholderValue(props.name)}
			value={props.value}
			onChange={props.onChange}
			placeholder={props.placeholder}
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
			className="input-field--number"
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