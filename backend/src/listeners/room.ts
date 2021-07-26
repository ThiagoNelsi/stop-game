import { Server, Socket } from "socket.io";
import Room from "../models/Room";

export default (io: Server, socket: Socket, SERVER_DATA: ts.IServerData) => {
    socket.on('create-room', async (data: ts.IRoomSchema) => {
        const sameNameRoom = await Room.findOne({ name: data.name });

        if (sameNameRoom) return socket.emit('room-name-unavailable');

        const room = await Room.create(data);

        io.emit('room-created', room);
    
    });
}