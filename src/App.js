import { createContext } from "react";
import { useState } from "react";
import Menu from "./component/menu";
import Quiz from "./component/quiz";
import Score from "./component/score";

import './App.css';

export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState('menu')
  const [score, setScore] = useState(0)

  return (
    <DataContext.Provider value={{appState, setAppState, score, setScore}}>
      <div className="App">
        <h1>Quiz web application</h1>
        {appState === 'menu' && <Menu/>}
        {appState === 'quiz' && <Quiz/>}
        {appState === 'score' && <Score/>}
      </div>
    </DataContext.Provider>
  );
}

export default App;
