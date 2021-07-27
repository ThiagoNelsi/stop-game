import React, { useState, useRef, useContext } from 'react';
import { FaGlobe, FaLock, FaSignal, FaUser, FaUsers } from 'react-icons/fa';

import api from '../../services/api';

import NewRoom from './components/NewRoom';
import Rooms from './components/Rooms';
import UsernameInputOverlay from './components/UsernameInputOverlay';

import { Container } from './styles';

import { appContext } from '../../context';

function Home() {

  let SEARCH_TIMEOUT = setTimeout(() => { }, 0);

  const { socket } = useContext(appContext);

  const [username, setUsername] = useState('');
  const [usernameOverlayVisible, setUsernameOverlayVisible] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [searchResult, setSearchResult] = useState<IRoomResponse[]>([]);

  const container = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

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

  const searchRooms = () => {

    clearTimeout(SEARCH_TIMEOUT);

    SEARCH_TIMEOUT = setTimeout(async () => {

      const query = searchInput?.current?.value;

      if (query === '') return setSearchResult([]);

      const { data } = await api.get(`/rooms/search?q=${query}`);

      setSearchResult(data);

    }, 200);

  }


  return (
    <Container ref={container}>
      <UsernameInputOverlay container={container} connect={connectUser} visible={usernameOverlayVisible} />
      <header>
        <h1>STOP!
          <div>
            <span><FaSignal /> { onlineUsers } users</span>
            <span><FaUser />  { username }</span>
          </div>
        </h1>
        <div className="input-container">
          <input type="text" name="search" id="search" placeholder="Pesquisar sala..." ref={searchInput} onChange={searchRooms} />

          {
            document.activeElement === searchInput.current && searchResult.length > 0 && <div className='search-results'>
              {
                searchResult.map(room => (
                  <div>
                    <h3>
                      {
                        room.privacy === 'private' && <FaLock color="#7a7a7a" />
                      }
                      {room.name.toUpperCase()}
                    </h3>
                    <span className="columns">{room.columns.join(' | ')}</span>
                    <span className="players"> <FaUsers color="#333" /> {0}/{room.maxPlayers}</span>

                  </div>
                ))
              }
            </div>
          }
        </div>
      </header>

      <main>
        <NewRoom />
        <Rooms socket={socket} />
      </main>
    </Container>
  );

}

export default Home;

interface IRoomResponse {
  name: string;
  columns: string[];
  maxPlayers?: number;
  privacy: 'private' | 'public';
  turnTime: number;
}