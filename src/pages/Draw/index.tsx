import { useState } from 'react';
import { Card } from '../../components/Card';
import { useDrawnResults } from '../../states/hooks/useDrawnResults';
import { useParticipantList } from '../../states/hooks/useParticipantList';

import './styles.css';

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
    <Card>
      <section className="draw">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={draw}>
          <select
            required
            name="participant-of-the-time"
            id="participant-of-the-time"
            placeholder="Selecione seu nome"
            value={participantOfTheTime}
            onChange={(event) => setParticipantOfTheTime(event.target.value)}
          >
            <option>Selecione seu nome</option>
            {participants.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </select>
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button className="button-draw">Sortear!</button>
        </form>
        {nameDrawn && (
          <p className="result" role="alert">
            {nameDrawn}
          </p>
        )}
        <footer className="draw">
          <img
            src="/images/aviao.png"
            className="airplane"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};
