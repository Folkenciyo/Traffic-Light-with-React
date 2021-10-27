import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Bulb = props => {
	const [isColor, setIsColor] = useState(props.color);
	const [on, setOn] = useState(false);

	useEffect(() => {
		if (on === false) {
			setIsColor("");
		} else {
			setIsColor(props.color);
		}
	}, [props.light]);

	return (
		<div
			className={`traffic-Light ${isColor}`}
			onClick={() => {
				if (isColor === "") {
					setIsColor(props.color);
					setOn(true);
					props.switchLight();
				} else {
					setIsColor("");
					setOn(false);
					props.switchLight();
				}
			}}></div>
	);
};

Bulb.propTypes = {
	color: PropTypes.string,
	switchLight: PropTypes.func,
	light: PropTypes.bool,
	key: PropTypes.string
};

export default Bulb;
