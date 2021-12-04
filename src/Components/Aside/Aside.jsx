import React from "react";
import './aside.scss';
import logo from "../../Assets/logo.svg";

const Aside = () => {
	return (
		<aside className="aside">
			<img src={logo} alt="easyBUDGET logo" />
			<div className="aside__expander"></div>
		</aside>
	)
}

export default Aside;