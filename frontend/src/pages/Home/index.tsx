import React, { useState, useRef, useContext } from 'react';
import { Socket } from 'socket.io-client';

import NewRoom from './components/NewRoom';
import Rooms from './components/Rooms';
import UsernameInputOverlay from './components/UsernameInputOverlay';

import { Container } from './styles';

import { appContext } from '../../context';

function Home() {

  const { socket } = useContext(appContext);
  
  const [username, setUsername] = useState('');
  const [usernameOverlayVisible, setUsernameOverlayVisible] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(0);

  const container = useRef<HTMLDivElement>(null);

  const connectUser = (name: string) => {

    socket?.emit?.('new user', name);

    socket?.on?.('user registered', () => {
      setUsername(name);
      setUsernameOverlayVisible(false);
    });

  }

  socket?.on?.('user count', (users) => {
    setOnlineUsers(users);
  });

  socket?.on?.('connected', () => setUsernameOverlayVisible(true));

  return (
    <Container ref={container}>
      <UsernameInputOverlay container={container} connect={connectUser} visible={usernameOverlayVisible} />
      <header>
        <h1>STOP! 
          <div>
            <span>Online Players: {onlineUsers}</span>
            <span>Username: {username}</span>
          </div>
        </h1>
        <input type="text" name="search" id="search" placeholder="Pesquisar sala..." />
      </header>
      
      <main>
        <NewRoom />
        <Rooms socket={socket} />
      </main>
    </Container>
  );

}

export default Home;
