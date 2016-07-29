'use strict';

const express = require('express');
const WebSocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.static(path.join(__dirname, 'app')));

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
	console.log('connected');
	ws.on('message', (message) => {
		console.log('message received: ' + message);
	});
	ws.on('close', () => console.log('disconnected'));
});

server.on('upgrade', wss.handleUpgrade);
server.listen(PORT);
