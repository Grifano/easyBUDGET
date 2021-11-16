import React from "react";
import Aside from "./Aside";
import Furnitura from "./Furnitura";
import Content from "./Content";

const Desk = () => {
	return (
		<>
			<Furnitura position_1={"top"} position_2={"left"} />
			<Furnitura position_1={"top"} position_2={"right"} />
			<Furnitura position_2={"right"} />
			<Furnitura position_2={"left"} />

			<main className="desk">
				<Aside />
				<Content />
			</main>
		</>
	)
}

export default Desk;
