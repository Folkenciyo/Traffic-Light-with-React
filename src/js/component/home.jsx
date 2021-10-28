import React, { Fragment, useState } from "react";

//include images into your bundle

import Bulb from "./trafficlight.jsx";

//create your first component

const Home = () => {
	const [lightRed, setLightRed] = useState(false);
	const [lightYellow, setLightYellow] = useState(false);
	const [lightGreen, setLightGreen] = useState(false);

	const [colorFirst, setColorFirst] = useState(""); //se llenan desde la funcion SwitchBulb
	const [colorSecond, setColorSecond] = useState("");
	const [colorThirst, setColorThirst] = useState("");

	const [textFirst, setTextFirst] = useState(""); //se llenan desde la funcion SwitchBulb
	const [textSecond, setTextSecond] = useState("");
	const [textThirst, setTextThirst] = useState("");

	const switchBulb = color => {
		/* 	(color === "stop" ? state === true : false)(
			color === "wait" ? state === true : false
		)(color === "go" ? state === true : false); */

		if (color === "stop") {
			setLightRed(true);
			setLightGreen(false);
			setLightYellow(false);

			setColorFirst("stop");
			setColorSecond("");
			setColorThirst("");

			setTextFirst("( ˘︹˘ )");
			setTextSecond("");
			setTextThirst("");
		} else if (color === "wait") {
			setLightRed(false);
			setLightYellow(true);
			setLightGreen(false);

			setColorFirst("");
			setColorSecond("wait");
			setColorThirst("");

			setTextFirst("");
			setTextSecond("(ㆆ_ㆆ)");
			setTextThirst("");
		} else if (color === "go") {
			setLightRed(false);
			setLightYellow(false);
			setLightGreen(true);

			setColorFirst("");
			setColorSecond("");
			setColorThirst("go");

			setTextFirst("");
			setTextSecond("");
			setTextThirst("(̶◉͛‿◉̶)");
		}
	};

	return (
		<div className="all">
			<div className="base"></div>
			<div className="container">
				<Bulb
					key="stop"
					id="stop"
					color={colorFirst}
					light={lightRed}
					switchLight={switchBulb}
					text={textFirst}
				/>
				<Bulb
					key="wait"
					id="wait"
					color={colorSecond}
					light={lightYellow}
					switchLight={switchBulb}
					text={textSecond}
				/>
				<Bulb
					key="go"
					id="go"
					color={colorThirst}
					light={lightGreen}
					switchLight={switchBulb}
					emogi={textThirst}
				/>
			</div>
			<div className="base"></div>
			<div className="suport"></div>
		</div>
	);
};

export default Home;
