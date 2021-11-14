import react from "react";
import logo from "../Assets/logo.svg";
import { MainButton, ExpandButton } from "./Buttons";

const Aside = () => {
	return (
		<aside className="aside">
			<img src={logo} />
			<MainButton />
			<ExpandButton />
		</aside>
	)
}

export default Aside;