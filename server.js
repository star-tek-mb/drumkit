'use strict';

const express = require('express');
const WebSocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.static(path.join(__dirname, 'app')));
server.listen(PORT);

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
	console.log('Client connected');
	ws.on('close', () => console.log('Client disconnected'));
});