import { Server } from "socket.io";
import Room from "../models/Room";

import roomSocket from './room';

export default (io: Server, SERVER_DATA: ts.IServerData) => {
    io.on('connection', async (socket) => {

        socket.emit('connected');

        roomSocket(io, socket, SERVER_DATA);

        const rooms = await Room.find();

        socket.emit('rooms', rooms);

        socket.on('disconnect', (reason) => {
            io.emit('user count', SERVER_DATA.onlineUsers());
        });
    
        socket.on('new user', (username: string) => {
            socket.emit('user registered');
            
            io.emit('user count', SERVER_DATA.onlineUsers());
    
        });
    
    });
}