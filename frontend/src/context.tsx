import React, { createContext, useEffect, useState } from 'react';
import socketClient, { Socket } from 'socket.io-client';

interface IContextProps {
    socket: Socket | null;
}

const SERVER = 'http://localhost:8000';

export const appContext = createContext({} as IContextProps);

const ContextProvider: React.FC = ({ children }) => {

    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        setSocket(socketClient(SERVER))
    }, []);

    const state = {
        socket
    }

    return <appContext.Provider value={state}>{children}</appContext.Provider>

}

export default ContextProvider;