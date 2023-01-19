import './Hourly.css';
import React from 'react';

import { convertDate, convertWeatherCode } from '../utils/function';

function Hourly(props: any) {

	const weatherCards = [];
	for (let i = 0; props.data && i < props.data.time.length && i < 24; i++) {
		const time = convertDate(props.data.time[i]);
		const weatherCode = convertWeatherCode(props.data.weathercode[i]);
		const temparature = props.data.temperature_2m[i];
		const feelslike = props.data.apparent_temperature[i];
		const tempUnit = props.units.temperature_2m;

		weatherCards.push(
			<div className="weather-card" key={"hourly-card-" + i}>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{time}</h5>
						<h6 className="card-subtitle mb-2 text-muted code">{weatherCode ? weatherCode : "Unavailable"}</h6>
						<p className="card-text mb-2 temp">{temparature + " " + tempUnit}</p>
						<p className="card-text humid">Feels Like {feelslike + tempUnit.replace("C", "")}</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="col-12 hr weather-row">
			<div className="weather-inner">
				{weatherCards}
			</div>
		</div>
	);
}

export default Hourly;