import React from "react";
import Aside from "./Aside";
import Furnitura from "./Furnitura";

const Dashboard = () => {
	return (
		<>
			<Furnitura position_1={"top"} position_2={"left"} />
			<Furnitura position_1={"top"} position_2={"right"} />
			<Furnitura position_2={"right"} />
			<Furnitura position_2={"left"} />

			<main className="dashboard">
				<Aside />
			</main>
		</>
	)
}

export default Dashboard;
