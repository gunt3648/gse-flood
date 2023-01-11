export function convertDate(date: string) {
	let time = new Date(date + 'Z')
		.toLocaleTimeString('en-US',
			{ timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
		).replace(":00", "");
	if (time === "12 AM") return "Midnight";
	else if (time === "12 PM") return "Noon";
	else return time.toLowerCase();
}

export function convertWeatherCode(code: number) {
	const wmocode: Map<number, string> = new Map<number, string>([
		[0, "Clear Sky"],
		[1, "Mainly Clear"],
		[2, "Partly Cloudy"],
		[3, "Overcast"],
		[45, "Fog"],
		[48, "Depositing Rime"],
		[51, "Light Drizzle"],
		[53, "Moderate Drizzle"],
		[55, "Dense Drizzle"],
		[56, "Light Freezing Drizzle"],
		[57, "Dense Freezing Drizzle"],
		[61, "Slight Rain"],
		[63, "Moderate Rain"],
		[65, "Heavy Rain"],
		[66, "Light Freezing Rain"],
		[67, "Heavy Freezing Rain"],
		[71, "Slight Snow Fall"],
		[73, "Moderate Snow Fall"],
		[75, "Heavy Snow Fall"],
		[77, "Snow Grains"],
		[80, "Slight Rain Showers"],
		[81, "Moderate Rain Showers"],
		[82, "Heavy Rain Showers"],
		[85, "Slight Snow Showers"],
		[86, "Heavy Snow Showers"]
	])

	return wmocode.get(code);
}

export function degToCompass(num: number) {
	var val = Math.floor((num / 22.5) + 0.5);
	var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
	return arr[(val % 16)];
}