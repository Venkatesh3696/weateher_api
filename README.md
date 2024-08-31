# Weather Api

this is a weather api which fetches the weather data from [weatherstack](https://weatherstack.com/) then returns response with weather data.

## Installation

Use the Node package manager to install dependencies.

```bash
npm install
```

## Usage

```bash
npm start
```

## output

you can check api at [localhost](http://localhost:5000/) or [this live link](https://weateher-api.onrender.com/) in postamn or browser

## Api Endpoints

### Home - "/"

it just returns text "welcome to weather app"

### weather - "/weather/?location=bengaluru"

it returns the current weather data of the location provided in query params

sample Data for successful request

```json
{
	"weatherData": {
		"request": {
			"type": "City",
			"query": "Bengaluru, India",
			"language": "en",
			"unit": "m"
		},
		"location": {
			"name": "Bengaluru",
			"country": "India",
			"region": "Karnataka",
			"lat": "12.983",
			"lon": "77.583",
			"timezone_id": "Asia/Kolkata",
			"localtime": "2024-08-31 11:30",
			"localtime_epoch": 1725103800,
			"utc_offset": "5.50"
		},
		"current": {
			"observation_time": "06:00 AM",
			"temperature": 25,
			"weather_code": 116,
			"weather_icons": [
				"https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
			],
			"weather_descriptions": ["Partly cloudy"],
			"wind_speed": 22,
			"wind_degree": 260,
			"wind_dir": "W",
			"pressure": 1014,
			"precip": 0.1,
			"humidity": 83,
			"cloudcover": 75,
			"feelslike": 27,
			"uv_index": 5,
			"visibility": 6,
			"is_day": "yes"
		}
	}
}
```
