const getWeatherData = async (req, res) => {
	const { location } = req.query;
	const apiURl = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${location}`;

	if (!location) {
		res.send({ message: 'Location query is required' });
	} else {
		try {
			const fetchWeather = async () => {
				const rawData = await fetch(apiURl);
				const data = await rawData.json();
				return data;
			};

			const weatherData = await fetchWeather();

			res.send({ weatherData });
		} catch (error) {
			res.send(error);
		}
	}
};

module.exports = { getWeatherData };
