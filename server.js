'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = express()
	.use(express.static(path.join(__dirname, 'app')))
	.listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
	console.log('connected');
	ws.on('message', (message) => {
		wss.clients.forEach((client) => {
			if (client != ws) {
				client.send(message);
			}
		});
		console.log('message received: ' + message);
	});
	ws.on('close', () => console.log('disconnected'));
});
