import { useState, useRef } from "react";
import styles from "./Game.module.css";

const Game = ({
  very,
  picword,
  picategory,
  letters,
  guessedLetters,
  guesses,
  Wrong,
  score,
}) => {
  const [letter, setLeteer] = useState("");
  const letterRef = useRef(null);

  const hsub = (e) => {
    e.preventDefault();
    very(letter);
    setLeteer("");
    letterRef.current.focus();
  };

  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className={styles.tip}>
        Dica sobre a palavra: <span>{picategory}</span>
      </h3>
      <p>voce tem {guesses} tentativa(s)</p>
      <div className={styles.wordcont}>
        {letters.map((letter, i) => {
          return guessedLetters.includes(letter) ? (
            <span key={i} className={styles.letter}>
              {letter}
            </span>
          ) : (
            <span key={i} className={styles.blank}></span>
          );
        })}
      </div>
      <div className={styles.letterContainer}>
        <form onSubmit={hsub}>
          <label>
            <input
              type="text"
              name="letter"
              onChange={(e) => {
                setLeteer(e.target.value);
              }}
              value={letter}
              ref={letterRef}
              maxLength="1"
              required
            />
          </label>
          <button>Jogar</button>
        </form>
      </div>
      <div className={styles.wrong}>
        <p>Letras ja usadas</p>
        {Wrong.map((letter, i) => {
          return <span key={i}>{letter}</span>;
        })}
      </div>
    </div>
  );
};

export default Game;
