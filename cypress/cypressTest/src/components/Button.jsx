import React from 'react';
import "../styles/waifu-selector.css"

const Button = ({func}) => {
	return (
		<button className="waifu-button" onClick={func}>
			¡Descubre a tu Waifu!
		</button>
	);
}

export default Button;