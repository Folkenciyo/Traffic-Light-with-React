import React, { Fragment, useState } from "react";

//include images into your bundle

import Bulb from "./trafficlight.jsx";

//create your first component

const Home = () => {
	const [lightRed, setLightRed] = useState(false);
	const [lightYellow, setLightYellow] = useState(false);
	const [lightGreen, setLightGreen] = useState(false);
	const [colorFirst, setColorFirst] = useState("");
	const [colorSecond, setColorSecond] = useState("");
	const [colorThirst, setColorThirst] = useState("");

	const switchBulb = (color, state) => {
		if (color == "stop") {
			setLightRed(true);
			setLightGreen(false);
			setLightYellow(false);
			setColorFirst("stop");
			setColorSecond("");
			setColorThirst("");
		} else if (color == "wait") {
			setLightRed(false);
			setLightYellow(true);
			setLightGreen(false);
			setColorFirst("");
			setColorSecond("wait");
			setColorThirst("");
		} else if (color == "go") {
			setLightRed(false);
			setLightYellow(false);
			setLightGreen(true);
			setColorFirst("");
			setColorSecond("");
			setColorThirst("go");
		}
		console.log(state, color);
	};
	return (
		<div className="all">
			<div className="base"></div>
			<div className="container">
				<Bulb
					key="stop"
					color={colorFirst}
					light={lightRed}
					switchLight={switchBulb}
				/>
				<Bulb
					key="wait"
					color={colorSecond}
					switchLight={switchBulb}
					light={lightYellow}
				/>
				<Bulb
					key="go"
					color={colorThirst}
					switchLight={switchBulb}
					light={lightGreen}
				/>
			</div>
			<div className="base"></div>
			<div className="suport"></div>
		</div>
	);
};

export default Home;
