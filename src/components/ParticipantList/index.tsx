import { useParticipantList } from '../../states/hooks/useParticipantList';

export const ParticipantList = () => {
  const participants: string[] = useParticipantList();

  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
};
