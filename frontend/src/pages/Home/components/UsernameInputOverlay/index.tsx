import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import './styles.css';

interface Props {
  container: React.RefObject<HTMLDivElement>;
}

function UsernameInputOverlay({ container }: Props) {

  const overlay = useRef<HTMLFormElement>(null);
  const usernameInput = useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState('');

  useLayoutEffect(() => {
    showUsernameInput();
  });

  function showUsernameInput() {
    if (overlay.current && usernameInput.current && container.current) {
      overlay.current.style.display = 'flex';
      container.current.style.overflow = 'hidden';
      usernameInput.current.focus();
    }
  }

  function closeUsernameInput(event: React.FormEvent) {
    event.preventDefault();
    if (username !== '' && overlay.current && container.current) {
      overlay.current.style.display = 'none';
      container.current.style.overflow = 'auto';
    } else {
      alert('Insira um nome');
    }
  }

  return (
    <form className="username-overlay" ref={overlay} onSubmit={closeUsernameInput}>
      <div className="overlay-box">
        <h1>Username:</h1>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameInput}
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button type="submit">ENTRAR</button>
      </div>
    </form>
  );

}

export default UsernameInputOverlay;
