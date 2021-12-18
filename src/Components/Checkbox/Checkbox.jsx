import React, { useState } from "react";
import './checkbox.scss';

const Checkbox = ({ paid, onChecked }) => {
	let defaultChecked = false;
	const [isChecked, setCheck] = useState(defaultChecked);

	const handleChacked = (e) => {
		let checked = e.target.checked;
		if (checked) {
			setCheck(!isChecked);
			// onChecked(isChecked);
		}
		// e.preventDefault();
	}

	return (
		<label>
			<input
				className="checkbox"
				type="checkbox"
				name="paid"
				onChange={handleChacked}
				paid={isChecked ? "true" : "false"}
			/>
		</label>
	)

}

export default Checkbox;