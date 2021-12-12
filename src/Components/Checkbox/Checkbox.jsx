import React, { useState } from "react";
import './checkbox.scss';

const Checkbox = ({ value }) => {
	let defaultChecked = true;
	const [isChecked, setCheck] = useState(!defaultChecked)

	const handleChacked = (e) => {
		console.log("Test");
		console.log(isChecked);
		e.preventDefault();
		setCheck(!isChecked)
	}

	return (
		<label>
			<input
				className="checkbox"
				type="checkbox"
				name="done"
				value={isChecked}
				onClick={handleChacked}
			/>
		</label>
	)

}

export default Checkbox;