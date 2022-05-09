const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// When hosting your application on another service (like Heroku, Nodejitsu, and AWS), your host may independently configure the process.env.PORT variable for you; after all, your script runs in their environment.
const PORT = process.env.PORT || 4000;

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

app.get("/",(req,res) => {
	res.json({ message: "Hello, world"});
});

app.post('/post-test', (req, res) => {
	console.log('Got body:', req.body);
	res.sendStatus(200);
});

app.listen(PORT, (req, res) => {
	console.log(`Server Started at PORT ${PORT}`);
});


