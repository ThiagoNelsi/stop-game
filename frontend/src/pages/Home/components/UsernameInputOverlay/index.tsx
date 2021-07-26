import React, { useState, useEffect, useRef } from 'react';

import { Container } from './styles';

interface Props {
  container: React.RefObject<HTMLDivElement>;
  connect: Function;
  visible: boolean;
}

function UsernameInputOverlay({ container, connect, visible }: Props) {

  const overlay = useRef<HTMLFormElement>(null);
  const usernameInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {

    event.preventDefault();

    if (usernameInput.current?.value) 
      connect(usernameInput.current.value);
  }

  return (
    <Container className="username-overlay" ref={overlay} visible={visible}>
      <div className="overlay-box">
        <h1>Username:</h1>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameInput}
        />
        <button type="submit" onClick={(event) => handleSubmit(event)}>ENTRAR</button>
      </div>
    </Container>
  );

}

export default UsernameInputOverlay;
