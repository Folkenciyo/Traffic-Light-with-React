import React, { Fragment } from "react";

//include images into your bundle

import Buld from "./trafficlight.jsx";

//create your first component

const Home = () => {
	return (
		<div className="container">
			<Buld key="stop" color="stop" />
			<Buld key="wait" color="wait" />
			<Buld key="go" color="go" />
		</div>
	);
};

export default Home;
