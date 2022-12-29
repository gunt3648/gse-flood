import './Hourly.css';
import React from 'react';

function Hourly(props: any) {
	console.log(props.data)

	const weatherCards = [];
	for (let i = 0; props.data && i < props.data.time.length && i < 24; i++) {
		weatherCards.push(
			<div className="col-3 weather-card" key={"hourly-card-" + i}>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{props.data.time[i]}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{props.data.weathercode[i]}</h6>
						<p className="card-text">Temparature: {props.data.temperature_2m[i]}</p>
						<p className="card-text">Humidity: {props.data.relativehumidity_2m[i]}</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<>{weatherCards}</>
	);
}

export default Hourly;