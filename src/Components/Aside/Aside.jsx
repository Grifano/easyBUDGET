import React, { useState } from "react";
import './aside.scss';
import logo from "../../Assets/logo.svg";
import { ExpandButton } from '../Buttons/Buttons'

const Aside = () => {
	const [isFullSize, setFullSize] = useState(false)
	let className = 'aside'
	if (isFullSize) {
		className += " aside--open"
	}

	console.log(isFullSize);

	return (
		<aside className={className}>
			<img src={logo} alt="easyBUDGET logo" />
			<div className="aside__expander"></div>
			<ExpandButton
				onClick={() => setFullSize(!isFullSize)}
				isFullSize={isFullSize}
				zone={'purple'}
			// style={{ transform: [{ rotate: '45deg' }] }}
			/>
		</aside>
	)
}

export default Aside;