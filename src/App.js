import { useContext, useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Detail from './components/Detail';
import Footer from './components/Footer';
import { PatternContext } from './context/PatternContext';
import { CanvasProvider} from './context/CanvasContext';
import usePattern from './context/CanvasContext';
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import CanvasHolder from './components/CanvasHolder';
import Accordion from './components/Accordion';

const App = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHight
  ]);
  const patterns = useContext(PatternContext);

  const { currentPattern } = usePattern();  

  const showMicrophones = () => {
    return Object.keys(patterns).map((key, i) => {
        return <li key={i}><Button btnLabel={patterns[key].btnLabel}/></li>
    })
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }

  })

  // console.log("Width: ", windowSize[0]);
  // console.log("Height: ", windowSize[1]);

  return (
    <div className="App">
      <main className="top-section">
        <h1>Polar Patterns</h1>
        <About/>
        <Accordion/>
      </main>

      <CanvasProvider>
      <section className="buttons-section">
      {windowSize[0] > 940 ? <ul className="microphone-list">{showMicrophones()}</ul> : <Dropdown/>}
      </section>
      <div className="container">
        <CanvasHolder currentPattern={currentPattern} windowSize={windowSize}/>
        <Detail/>
      </div>
      </CanvasProvider>
      <Footer/>
    </div>
  );
}

export default App;
