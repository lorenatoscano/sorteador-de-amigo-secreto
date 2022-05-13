import { useNavigate } from 'react-router-dom';
import { useDrawing } from '../../states/hooks/useDrawing';
import { useParticipantList } from '../../states/hooks/useParticipantList';

import './styles.css';

export const Footer = () => {
  const participants = useParticipantList();

  const navigate = useNavigate();

  const draw = useDrawing();

  const start = () => {
    draw();
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
