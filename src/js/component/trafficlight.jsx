import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Bulb = props => {
	const [isColor, setIsColor] = useState(props.color);
	const [on, setOn] = useState(false);

	useEffect(() => {
		//Esto es pa´ cuando táh apagao, leuh´sca
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
				props.switchLight(props.id);
				console.log(props.id); //¿cómo pasar el props.id y que no salga undefined?
			}}>
			{props.text}
		</div> //¿?
	);
};

Bulb.propTypes = {
	color: PropTypes.string,
	switchLight: PropTypes.func,
	light: PropTypes.bool,
	id: PropTypes.string,
	emogi: PropTypes.string
};

export default Bulb;
