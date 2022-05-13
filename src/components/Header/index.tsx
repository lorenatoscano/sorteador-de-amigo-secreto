import './styles.css';

export const Header = () => {
  return (
    <header className="header">
      <div
        className="logo-image"
        role="img"
        aria-label="Logo do Sorteador"
      ></div>
      <img
        className="participant"
        src="/images/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
};
