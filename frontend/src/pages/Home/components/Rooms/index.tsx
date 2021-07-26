import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { Socket } from 'socket.io-client';

import { Container } from './styles';

interface IRoom {
  name: string;
  columns: string[];
  onlinePlayers: number;
  maxPlayers: number;
}

interface RoomsComponent {
  socket: Socket | null;
}

function Rooms({ socket }: RoomsComponent) {

  const [rooms, setRooms] = useState<IRoom[]>(Array(0));

  useEffect(() => {
    setRooms(roomsMock);
  }, []);

  socket?.off('room-created')?.on?.('room-created', (room: IRoom) => {
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
            <p className="room-name">{room.name}</p>
            <span className="room-columns">{room.columns.join(' - ').toUpperCase()}</span>
            <span className="players"> <FaUsers color="#333" /> <span>{room.onlinePlayers}/{room.maxPlayers}</span></span>
          </li>
        ))
      }
      </ul>
    </Container>
  );

}

const roomsMock: IRoom[] = [
  // {
  //   name: 'Some name',
  //   columns: ['col1', 'column 2', 'mycolumn', 'some column', 'testing', 'mycolumn', 'some column', 'testing'],
  //   onlinePlayers: 5,
  //   maxPlayers: 5,
  // },
  // {
  //   name: 'Some name',
  //   columns: ['col1', 'column 2', 'mycolumn', 'some column', 'testing'],
  //   onlinePlayers: 5,
  //   maxPlayers: 10,
  // },
  // {
  //   name: 'Some name',
  //   columns: ['col1', 'column 2', 'mycolumn', 'some column', 'testing'],
  //   onlinePlayers: 6,
  //   maxPlayers: 15,
  // },
  // {
  //   name: 'Some name',
  //   columns: ['col1', 'column 2', 'mycolumn', 'some column', 'testing'],
  //   onlinePlayers: 5,
  //   maxPlayers: 5,
  // },
];

export default Rooms;
