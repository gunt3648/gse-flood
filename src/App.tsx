import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Hourly from './components/Hourly';
import Daily from './components/Daily';

function App() {
	const weatherConfig = require("./other/open-meteo.json");
	const [timezone, setTimezone] = useState<string>("");
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
		setTimezone(weather.timezone_abbreviation);
		setHourlyUnits(weather.hourly_units);
		setDailyUnits(weather.daily_units);
		setHourlyData(weather.hourly);
		setDailyData(weather.daily);
	}

	return (
		<div className="container">
			{/* App header */}
			<div className="row">
				<h2 className="app-title">Weather Forecast - Tokyo</h2>
			</div>

			{/* Hourly forecast */}
			<div className="row">
				<h3>Hourly forecast</h3>
				<Hourly units={hourlyUnits} data={hourlyData}></Hourly>
			</div>

			{/* Daily forecast */}
			<div className="row">
				<h3>Daily forecast</h3>
				<Daily units={dailyUnits} data={dailyData}></Daily>
			</div>

			{/* Flood prediction */}
			<div className="row">
				<h3>Flood prediction</h3>
			</div>
		</div>
	);
}

export default App;
