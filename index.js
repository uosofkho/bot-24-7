const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
//bot 24/7 online
const express = require('express')
const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('MRuosof yt');
});

app.listen(3000, () => console.log('Web View On Succed'));
