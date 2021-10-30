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

	const [textFirst, setTextFirst] = useState("");
	const [textSecond, setTextSecond] = useState("");
	const [textThirst, setTextThirst] = useState("");

	const switchBulb = (color, on) => {
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
		} else {
			setLightRed(true);
			setLightYellow(true);
			setLightGreen(true);

			setColorFirst("stop");
			setColorSecond("wait");
			setColorThirst("go");

			setTextFirst("");
			setTextSecond("");
			setTextThirst("");
		}
	};

	return (
		<div className="all">
			<p>DobleClic!</p>
			<div className="base"></div>
			<div className="container">
				<Bulb
					key="stop"
					color={colorFirst}
					light={lightRed}
					switchLight={switchBulb}
					emogi={textFirst}
				/>
				<Bulb
					key="wait"
					color={colorSecond}
					light={lightYellow}
					switchLight={switchBulb}
					emogi={textSecond}
				/>
				<Bulb
					key="go"
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
