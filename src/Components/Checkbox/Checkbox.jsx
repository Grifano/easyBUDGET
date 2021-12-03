import React from "react";
import './checkbox.scss';

const Checkbox = () => {

	return (
		<label>
			<input
				className="checkbox"
				type="checkbox"
				name="done"
			/>
		</label>
	)

}

export default Checkbox;