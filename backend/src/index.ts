import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

import connection from './listeners/connection';

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

const PORT = 8000;

const SERVER_DATA: ts.IServerData = {
    onlineUsers: 0,
}

connection(io, SERVER_DATA);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
