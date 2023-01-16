import './Flood.css';
import React from 'react';

import { convertDate } from '../utils/function';
import moment from 'moment';

function Flood(props: any) {
	const date = props.data && props.data.Date ? props.data.Date.split(".") : "";
	const fullDate = date ? new Date(date[2] + "-" + date[1] + "-" + date[0] + "T00:00:00") : "";
	const formattedDate = fullDate ? moment(fullDate).format("MMM D, YYYY") : "";
	const pred = props.data && props.data.Flood ? props.data.Flood : "";

	return (
		<div className="flood-card">
				<div className="card">
					<div className="card-body">
						<p className="card-text">Date: {formattedDate}</p>
						<p className="card-text">Flood Chance: {pred}</p>
					</div>
				</div>
			</div>
			
			// {}
	);
}

export default Flood;