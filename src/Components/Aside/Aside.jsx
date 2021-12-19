import React, { useState } from "react";
import './aside.scss';
import logo from "../../Assets/logo.svg";
import { ExpandButton } from '../Buttons/Buttons'
import Summary from "Components/Summary/Summary";

const Aside = ({ isMobile }) => {

	const [isFullSize, setFullSize] = useState(false)
	let className = 'aside'
	if (isFullSize) {
		className += " aside--open"
	}

	return (
		<aside className={className}>
			<img src={logo} alt="easyBUDGET logo" />
			<div className="aside__expander"></div>
			{isMobile ? <Summary /> : ''}

			<ExpandButton
				onClick={() => setFullSize(!isFullSize)}
				isFullSize={isFullSize}
				zone={'purple'}
			/>
		</aside>
	)
}

export default Aside;