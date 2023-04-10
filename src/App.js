import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';

const App = () => {
  const [currentPattern, setCurrentPattern] = useState("");

  const microphones = {
    CLEAR: "Clear",
    OMNIDIRECTIONAL: "Omnidirectional",
    BIDIRECTIONAL: "Bidirectional",
    CARDIOID: "Cardioid"
  }

  const onChange = (e) => {
    setCurrentPattern(e.target.value);
  }

  const showMicrophones = () => {
    return Object.keys(microphones).map((key, i) => {
        return <li key={i}><button onClick={onChange} value={key}>{microphones[key]}</button></li>
    })
  }

  return (
    <div className="App">
      <h1>Polar Patterns</h1>
      <ul>{showMicrophones()}</ul>
      <Canvas currentPattern={currentPattern}/>
    </div>
  );
}

export default App;
