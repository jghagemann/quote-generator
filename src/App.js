import React, {useState} from 'react';
import './App.css';
import frases from './frases'

const App = () => {
const  [frase, setFrase] = useState("");
const onClick = () => {
  const numeroAleatorio = parseInt(Math.random() * (13 - 0) + 0);
  setFrase(frases[numeroAleatorio].content);
}

  return (
    <div className="App">
      <button onClick={onClick}>Gerar uma Frase</button>
      {frase}
    </div>
  );
}

export default App;
