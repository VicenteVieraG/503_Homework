import React from 'react';
import {useState} from "react";
import Button from './Button';
import "../styles/waifu-selector.css"

const WaifuSelector = () => {
	const [pickData, setPickData] = useState(null);

	const getWaifu = () => {
		fetch("https://api.waifu.im/search")
		.then(res => res.json())
		.then(data => setPickData(data.images[0].url));
	}

	return (
		<div className="waifu-container">
			<div className="content-container">
				<p>Programa con la finalidad de ayudarte a descubrir a tu verdadera waifu</p>
				<Button func={getWaifu}/>
			</div>
			<div>
				<img className="img-container" src={pickData} alt="Tu Waifu xD"/>
			</div>
		</div>
	);
}

export default WaifuSelector;