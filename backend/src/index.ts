import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();

const server = http.createServer(app);

const io = new Server(server);

const PORT = 8000;

io.on('connection', (socket) => {
    console.log('New user: ' + socket.id);
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});