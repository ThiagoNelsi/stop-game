import React, { useState, useEffect } from 'react';
import { FaUsers, FaLock } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { Socket } from 'socket.io-client';

import { Container } from './styles';

interface IRoomResponse {
  name: string;
  columns: string[];
  maxPlayers?: number;
  privacy: 'private' | 'public';
  turnTime: number;
}

interface RoomsComponent {
  socket: Socket | null;
}

function Rooms({ socket }: RoomsComponent) {

  const [rooms, setRooms] = useState<IRoomResponse[]>(Array(0));

  useEffect(() => {
    setRooms([]);
  }, []);

  socket?.off('room-created')?.on?.('room-created', (room: IRoomResponse) => {
    console.log({ room, rooms })
    setRooms(prev => [room, ...prev]);
  })

  socket?.on?.('rooms', data => setRooms(data.reverse()));

  return (
    <Container>
      <h3>SALAS</h3>
      <ul>
        {
          rooms.map(room => (
            <li className="room" key={uuidv4()}>
              <p className="room-name">
                {
                  room.privacy === 'private' && <FaLock color="#7a7a7a" />
                }
                {room.name}
              </p>
              <span className="room-columns">{room.columns.join(' - ').toUpperCase()}</span>
              <span className="players"> <FaUsers color="#333" /> <span>0/{room.maxPlayers}</span></span>
            </li>
          ))
        }
      </ul>
    </Container>
  );

}

export default Rooms;
