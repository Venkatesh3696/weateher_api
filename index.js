const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const weatherRoute = require('./routes/weather.route.js');

dotenv.config();

const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.use('/weather', weatherRoute);

app.get('/', (req, res) => res.send('welcome to weather app '));

app.listen(process.env.PORT, () => {
	console.log(`App is running at port ${process.env.PORT}`);
});
