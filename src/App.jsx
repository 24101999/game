
import './App.css';
import Start from './components/Start';
import {useCallback , useEffect , useState} from 'react'
import dados from './dados/dado' 
import Game from './components/Game';
import End from './components/End';


const stages = [
{id:1 , name:'start'},
{id:2 , name:'game'},
{id:3 , name:'end'}
]

function App() {

  const [GameStage , setGameStage] = useState([stages[0].name])
  const [words] = useState(dados.alimento)

  console.log(GameStage)

  return (
    <div className="App">
{GameStage === "start" && <Start/>}
{GameStage === "game" && <Game/>}
{GameStage === "end" && <End/>}
    </div>
  );
}

export default App;
