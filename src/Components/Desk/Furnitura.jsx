import React from "react";

const Furnitura = (props) => {

	const setPosition = {
		[props.position_1]: 60,
		[props.position_2]: 60,
	}

	return (
		<div
			className="furnitura"
			style={setPosition}>
		</div>
	)
}
export default Furnitura;