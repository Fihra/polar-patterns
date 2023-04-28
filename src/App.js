import { useContext } from 'react';
import './App.css';
import About from './components/About';
import Canvas from './components/Canvas';
import Detail from './components/Detail';
import Footer from './components/Footer';
import { PatternContext } from './context/PatternContext';
import { CanvasProvider} from './context/CanvasContext';
import usePattern from './context/CanvasContext';
import Button from './components/Button';

const App = () => {
  const patterns = useContext(PatternContext);

  const { currentPattern } = usePattern();  

  const showMicrophones = () => {
    return Object.keys(patterns).map((key, i) => {
      // console.log(patterns[key].btnLabel);
        return <li key={i}><Button btnLabel={patterns[key].btnLabel}/></li>
    })
  }



  return (
    <div className="App">
      <main className="top-section">
        <h1>Polar Patterns</h1>
        <About/>
      </main>

      <CanvasProvider>
      <section className="buttons-section">
      <ul className="microphone-list">{showMicrophones()}</ul>
      </section>
      <div className="container">
        <Canvas currentPattern={currentPattern}/>
        <Detail/>

      </div>
      </CanvasProvider>
      <Footer/>
    </div>
  );
}

export default App;
