import React from "react";

const InputField = (props) => {

	const placeholderValue = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<input className="form-stack__input" name={props.name} placeholder={placeholderValue(props.name)} value={props.value} onChange={props.onChange} />
	)
}

export default InputField;