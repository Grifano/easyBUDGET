import React from "react";

import Aside from "Components/Aside/Aside";
import Desk from "./Components/Desk/Desk";
// import Footer from "./Components/Footer/Footer";

const App = () => {
	const isMobile = window.innerWidth < 991;

	return (
		<>
			<Aside isMobile={isMobile} />
			<Desk isMobile={isMobile} />
			{/* <Footer /> */}
		</>
	)
};

export default App;