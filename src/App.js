import { useState, useContext } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import { PatternContext } from './context/PatternContext';
import { CanvasProvider} from './context/CanvasContext';
import usePattern from './context/CanvasContext';
import Button from './components/Button';

const App = () => {
  // const [currentPattern, setCurrentPattern] = useState("");
  const patterns = useContext(PatternContext);

  // const { usePattern, currentPattern } = useContext(CanvasContext);
  const { currentPattern } = usePattern();  

  const showMicrophones = () => {
    // console.log(Object.keys(patterns));
    return Object.keys(patterns).map((key, i) => {
      // console.log(patterns[key].btnLabel);
        return <li key={i}><Button btnLabel={patterns[key].btnLabel}/></li>
    })
  }

  return (
    <div className="App">
      <h1>Polar Patterns</h1>
      <CanvasProvider>
      <ul className="microphone-list">{showMicrophones()}</ul>
      <Canvas currentPattern={currentPattern}/>
      </CanvasProvider>
    </div>
  );
}

export default App;
