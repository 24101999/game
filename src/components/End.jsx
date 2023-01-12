import styles from "./End.module.css";
const End = ({ retry }) => {
  return (
    <div className={styles.over}>
      <h1>Game Over</h1>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  );
};

export default End;
