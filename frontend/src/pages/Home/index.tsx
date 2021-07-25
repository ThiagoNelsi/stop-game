import React, { useRef } from 'react';

import NewRoom from './components/NewRoom';
import Rooms from './components/Rooms';
import UsernameInputOverlay from './components/UsernameInputOverlay';

import { Container } from './styles';

function Home() {

  const container = useRef<HTMLDivElement>(null);

  return (
    <Container ref={container}>
      <UsernameInputOverlay container={container} />
      <header>
        <h1>STOP! <span>Username: Thiago</span></h1>
        <input type="text" name="search" id="search" placeholder="Pesquisar sala..." />
      </header>
      
      <main>
        <NewRoom />
        <Rooms />
      </main>
    </Container>
  );

}

export default Home;
