import { Server } from "socket.io";

export default (io: Server, SERVER_DATA: ts.IServerData) => {
    io.on('connection', async (socket) => {

        socket.emit('connected');

        socket.on('disconnect', (reason) => {
            SERVER_DATA.onlineUsers -= 1;
            io.emit('user count', SERVER_DATA.onlineUsers);
        });
    
        socket.on('new user', (username: string) => {
            socket.emit('user registered');
            
            SERVER_DATA.onlineUsers += 1;
            io.emit('user count', SERVER_DATA.onlineUsers);
    
        });
    
    });
}