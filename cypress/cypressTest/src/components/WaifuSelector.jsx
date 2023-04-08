import React from 'react';
import {useState, useEffect} from "react";
import Button from './Button';
import "../styles/waifu-selector.css"

const WaifuSelector = () => {
	const [pickData, setPickData] = useState(null);

	const getWaifu = () => {
		fetch("https://api.waifu.im/search?gif=true")
		.then(res => res.json())
		.then(data => console.log(data))
	}

	return (
		<div className="waifu-container">
			<div className="content-container">
				<p>Programa con la finalidad de ayudarte a descubrir a tu verdadera waifu</p>
				<Button func={getWaifu}/>
			</div>
			<div>
				awa
			</div>
		</div>
	);
}

export default WaifuSelector;