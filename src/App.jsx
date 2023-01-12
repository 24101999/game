import "./App.css";
import { useCallback, useEffect, useState } from "react";
import dados from "./dados/dado.js";
import Start from "./components/Start";
import Game from "./components/Game";
import End from "./components/End";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [GameStage, setGameStage] = useState([stages[0].name]);

  const [words] = useState(dados);

  console.log(words);

  const [picword, setPicword] = useState("");

  const [picategory, setPicategory] = useState("");

  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);

  const [Wrong, setWrong] = useState([]);

  const [guesses, setGuesses] = useState(3);

  const [score, setScore] = useState(0);

  const pickWordCategory = () => {
    const categoryes = Object.keys(words);

    const category =
      categoryes[Math.floor(Math.random() * Object.keys(categoryes).length)];

    console.log(category);

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  console.log(Object.keys(words));

  const startGame = () => {
    const { category, word } = pickWordCategory();

    let wordLatters = word.split("");

    wordLatters = wordLatters.map((l) => l.toLowerCase());

    setPicategory(word);
    setPicategory(category);
    setLetters(wordLatters);

    setGameStage(stages[1].name);
  };

  const very = (letter) => {
    const normalized = letter.toLowerCase();

    if (guessedLetters.includes(normalized) || Wrong.includes(normalized)) {
      return;
    }
    if (letter.includes(normalized)) {
      setGuessedLetters((atualGuessed) => [...atualGuessed, normalized]);
    } else {
      setWrong((atualWrong) => [...atualWrong, normalized]);

      setGuesses(2);
    }
    console.log(guessedLetters);
    console.log(Wrong);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {GameStage == "start" ? <Start startGame={startGame} /> : ""}
      {GameStage == "game" ? (
        <Game
          very={very}
          picword={picword}
          picategory={picategory}
          letters={letters}
          guessedLetters={guessedLetters}
          guesses={guesses}
          Wrong={Wrong}
          score={score}
        />
      ) : (
        ""
      )}
      {GameStage == "end" ? <End retry={retry} /> : ""}
    </div>
  );
}

export default App;
