import styles from "./Start.module.css";

function Start() {
  return (
    <div className={styles.start}>
      <h1>secret Word</h1>
      <p>clique no botão abaixo para comecar a jogar</p>
      <button>start</button>
    </div>
  );
}

export default Start;
