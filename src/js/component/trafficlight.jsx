import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Bulb = props => {
	const [isColor, setIsColor] = useState(props.color);
	const [on, setOn] = useState(false);

	useEffect(() => {
		//Esto es pa´ cuando táh apagao, reluh´sca
		if (on === false) {
			setIsColor("");
		} else {
			setIsColor(props.color);
		}
	}, [props.light]);

	return (
		<div
			className={`traffic-Light ${isColor}`}
			onClick={e => {
				setIsColor(props.color);
				/* e.preventDefault(); */
				props.switchLight(props.color, on);
			}}>
			{props.emogi}
		</div>
	);
};

Bulb.propTypes = {
	color: PropTypes.string,
	switchLight: PropTypes.func,
	light: PropTypes.bool,
	emogi: PropTypes.string
};

export default Bulb;
