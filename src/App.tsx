import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
	const weatherConfig = require("./other/open-meteo.json");
	const [weatherData, setWeatherData] = useState<any>(null);

	async function getWeather() {
		const weather = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherConfig.lat}&longitude=${weatherConfig.long}&hourly=${weatherConfig.hourly}&daily=${weatherConfig.daily}&timezone=${weatherConfig.timezone}`);
		setWeatherData(weather);
	}

	getWeather();

	return (
		<div className="container">
			{/* App header */}
			<div className="row">
				<h2 className="app-title">Weather Forecast</h2>
			</div>

			{/* Hourly forecast */}
			<div className="row">
				
			</div>

			{/* Daily forecast */}
			<div className="row">

			</div>
		</div>
	);
}

export default App;
