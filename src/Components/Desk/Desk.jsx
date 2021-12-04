import React from "react";
import Aside from "../Aside/Aside";
import Furnitura from "../Fornitura/Furnitura";
import Summary from "Components/Summary/Summary";
import PlanCards from "Components/PlanCards/PlanCards";

const Desk = () => {
	return (
		<>
			<Furnitura position_1={"top"} position_2={"left"} />
			<Furnitura position_1={"top"} position_2={"right"} />
			<Furnitura position_2={"right"} />
			<Furnitura position_2={"left"} />

			<main className="desk">
				<Aside />
				<section className="desk__content">
					<Summary />
					<PlanCards />
				</section>
			</main>
		</>
	)
}

export default Desk;