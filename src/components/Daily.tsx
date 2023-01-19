import './Daily.css';
import React from 'react';
import moment from 'moment';
import { convertWeatherCode, degToCompass } from '../utils/function';

function Daily(props: any) {
	const weatherAccordion = [];
	for (let i = 0; props.data && i < props.data.time.length && i < 24; i++) {
		const date = new Date(props.data.time[i]);
		const formattedDate = moment(date).format("MMM D");
		const weatherCode = convertWeatherCode(props.data.weathercode[i]);
		const maxTemparature = props.data.temperature_2m_max[i];
		const minTemparature = props.data.temperature_2m_min[i];
		const maxFeelslike = props.data.apparent_temperature_max[i];
		const minFeelslike = props.data.apparent_temperature_min[i];
		const sunrise = props.data.sunrise[i];
		const sunset = props.data.sunset[i];
		const maxWindSpeed = props.data.windspeed_10m_max[i];
		const maxWindGust = props.data.windgusts_10m_max[i];
		const windDirection = props.data.winddirection_10m_dominant[i];

		const tempUnit = props.units.temperature_2m_max;
		const windSpdUnit = props.units.windspeed_10m_max;

		weatherAccordion.push(
			<div className="accordian-item" key={"daily-accordion-" + i}>
				<h2 className="accordion-header" id={"heading" + i}>
					<button className={`accordion-button ${i !== 0 ? "collapsed dl-border-top" : ""} dl-button ${i === 0 ? "dl-first-radius" : ""}  ${i === props.data.time.length - 1 ? "dl-last-radius" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + i} aria-expanded="true" aria-controls={"collapse" + i}>
						<span className="dl-date">{formattedDate}</span>
						<span className="dl-weather-code">{weatherCode ? weatherCode : "Unavailable"}</span>
						<div className="dl-temp">
							<span className="dl-max-temp">{maxTemparature}</span>
							<span className="dl-min-temp">/ {minTemparature + " " + tempUnit}</span>
						</div>
					</button>
				</h2>
				<div id={"collapse" + i} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`} aria-labelledby={"headingOne" + i} data-bs-parent="#accordion-daily">
					<div className={`accordion-body ${i === props.data.time.length - 1 ? "body-last-radius" : ""}`}>
						<div className="dl-full-feelslike">
							<p>Max Feels Like: {maxFeelslike}</p>
							<p>Min Feels Like: {minFeelslike}</p>
						</div>
						<div className="dl-full-sun">
							<p>Sunrise: {moment(sunrise).format("hh:mm a")}</p>
							<p>Sunset: {moment(sunset).format("hh:mm a")}</p>
						</div>
						<div className="dl-full-wind">
							<p>Max Wind Speed: {maxWindSpeed + " " + windSpdUnit}</p>
							<p>Max Wind Gust: {maxWindGust + " " + windSpdUnit}</p>
							<p>Wind Direction: {degToCompass(windDirection)}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="accordion" id="accordion-daily">
			{weatherAccordion}
		</div>
	);
}

export default Daily;
