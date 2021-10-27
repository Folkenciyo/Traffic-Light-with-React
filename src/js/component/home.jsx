import React, { Fragment, useState } from "react";

//include images into your bundle

import Bulb from "./trafficlight.jsx";

//create your first component

const Home = () => {
	const [light, setLight] = useState(false);

	const switchBulb = () => {
		setLight(!light);
	};
	return (
		<div className="container">
			<Bulb
				key="stop"
				color="stop"
				light={light}
				switchLight={switchBulb}
			/>
			<Bulb
				key="wait"
				color="wait"
				switchLight={switchBulb}
				light={light}
			/>
			<Bulb key="go" color="go" switchLight={switchBulb} light={light} />
		</div>
	);
};

export default Home;
