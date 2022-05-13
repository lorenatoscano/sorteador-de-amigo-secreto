import { useNavigate } from 'react-router-dom';
import { useParticipantList } from '../../hooks/useParticipantList';

import './styles.css';

export const Footer = () => {
  const participants = useParticipantList();

  const navigate = useNavigate();

  const start = () => {
    navigate('/draw');
  };

  return (
    <footer className="footer-configurations">
      <button
        className="button-start"
        disabled={participants.length < 3}
        onClick={start}
      >
        Iniciar brincadeira!
      </button>
      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};
