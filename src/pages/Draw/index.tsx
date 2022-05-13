import { useState } from 'react';
import { useDrawnResults } from '../../states/hooks/useDrawnResults';
import { useParticipantList } from '../../states/hooks/useParticipantList';

export const Draw = () => {
  const [participantOfTheTime, setParticipantOfTheTime] = useState('');
  const [nameDrawn, setNameDrawn] = useState('');

  const participants = useParticipantList();
  const drawnResults = useDrawnResults();

  const draw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (drawnResults.has(participantOfTheTime)) {
      setNameDrawn(drawnResults.get(participantOfTheTime)!);
    }
  };

  return (
    <section>
      <form onSubmit={draw}>
        <select
          required
          name="participant-of-the-time"
          id="participant-of-the-time"
          placeholder="Selecione seu nome"
          value={participantOfTheTime}
          onChange={(event) => setParticipantOfTheTime(event.target.value)}
        >
          {participants.map((participant) => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
        <button>Sortear!</button>
      </form>
      {nameDrawn && <p role="alert">{nameDrawn}</p>}
    </section>
  );
};
