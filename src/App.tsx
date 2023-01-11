import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Hourly from './components/Hourly';
import Daily from './components/Daily';

function App() {
	const weatherConfig = require("./other/open-meteo.json");
	const [hourlyUnits, setHourlyUnits] = useState(null);
	const [dailyUnits, setDailyUnits] = useState(null);
	const [hourlyData, setHourlyData] = useState(null);
	const [dailyData, setDailyData] = useState(null);


	function getWeather() {
		return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weatherConfig.lat}&longitude=${weatherConfig.long}&hourly=${weatherConfig.hourly}&daily=${weatherConfig.daily}&timezone=${weatherConfig.timezone}`);
	}

	useEffect(() => {
		getWeather().then(response => {
			extractResponse(response.data);
		});
	}, [weatherConfig]);

	function extractResponse(weather: any) {
		setHourlyUnits(weather.hourly_units);
		setDailyUnits(weather.daily_units);
		setHourlyData(weather.hourly);
		setDailyData(weather.daily);
	}

	return (
		<>
			{/* App header */}
			<div className="app-header">
				<h2 className="app-title">
					<div className="container">
						HEPTAGRAM
					</div>
				</h2>
				<h5 className="app-location">
					<div className="container">
						Location: India
					</div>
				</h5>
			</div>

			<div className="container">
				{/* Hourly forecast */}
				<div className="row app-section">
					<h3>Hourly Weather</h3>
					<Hourly units={hourlyUnits} data={hourlyData}></Hourly>
				</div>

				<div className="row app-section">
					{/* Daily forecast */}
					<div className="col-12 col-lg-8 app-forecast">
						<h3>Daily Weather</h3>
						<Daily units={dailyUnits} data={dailyData}></Daily>
					</div>

					{/* Flood prediction */}
					<div className="col-12 col-lg-4 app-forecast">
						<h3>Flood Prediction</h3>
					</div>
				</div>
				<br />
			</div>
		</>
	);
}

export default App;
