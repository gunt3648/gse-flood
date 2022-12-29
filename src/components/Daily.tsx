import './Daily.css';
import React from 'react';

function Daily(props: any) {
	console.log(props.data)

	const weatherCards = [];
	for (let i = 0; props.data && i < props.data.time.length && i < 24; i++) {
		weatherCards.push(
			<div className="col-3 weather-card" key={"hourly-card-" + i}>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{props.data.time[i]}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{props.data.weathercode[i]}</h6>
						<p className="card-text">Max Temparature: {props.data.temperature_2m_max[i]}</p>
						<p className="card-text">Min Temparature: {props.data.temperature_2m_min[i]}</p>
						<p className="card-text">Sun Rise: {props.data.sunrise[i]}</p>
						<p className="card-text">Sun Set: {props.data.sunset[i]}</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<>{weatherCards}</>
	);
}

export default Daily;
