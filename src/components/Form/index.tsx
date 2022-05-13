import { useRef, useState } from 'react';
import { useAddParticipant } from '../../hooks/useAddParticipant';
import { useErrorMessage } from '../../hooks/useErrorMessage';

import './styles.css';

export const Form = () => {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addOnList = useAddParticipant();
  const errorMessage = useErrorMessage();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addOnList(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addParticipant}>
      <div className="group-input-btn">
        <input
          ref={inputRef}
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!name}>Adicionar</button>
      </div>

      {errorMessage && (
        <p className="alert error" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
};
