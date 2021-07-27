import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

import routes from './routes';
import connection from './listeners/connection';

const app = express();
app.use(cors());

app.use(routes);

const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

const PORT = 8000;

const SERVER_DATA: ts.IServerData = {
    onlineUsers: () => Number(io.engine.clientsCount),
}

connection(io, SERVER_DATA);

mongoose.connect('mongodb://localhost:27017/dev', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});

