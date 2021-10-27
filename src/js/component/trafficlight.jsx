import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Buld = props => {
	const [isColor, setIsColor] = useState(props.color);
	const [lights, setLights] = useState([false, false, false]);

	useEffect(() => {
		function setActiveLight(isActive, index) {
			if (isActive) {
				lights[index] = false;
				setLights([...lights]);
			} else if (lights.every(active => !active)) {
				lights[index] = true;
				setLights([...lights]);
			}
		}

		return (
			<ul className="traffic-light">
				{lights.map((isActive, index) => (
					<li
						key={index}
						onClick={() => setActiveLight(isActive, index)}>
						<span className={isActive ? "on" : "off"} />
					</li>
				))}
			</ul>
		);
	}, []);
	return (
		<div
			className={`traffic-Ligth ${isColor}`}
			onClick={() => {
				if (isColor === "") {
					setIsColor(props.color);
				} else {
					setIsColor("");
				}
			}}></div>
	);
};

Buld.propTypes = {
	color: PropTypes.string
};

export default Buld;
