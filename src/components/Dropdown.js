import { useContext } from 'react';
import usePattern from '../context/CanvasContext';
import { PatternContext } from '../context/PatternContext';


const Dropdown = () => {
    const { currentPattern, setPattern } = usePattern();

    const patterns = useContext(PatternContext);

    const handleChange = (e) => {
        console.log("Current Pattern: ", currentPattern);
        setPattern(e.target.value);
    }
    return(
        <select onChange={handleChange} value={currentPattern}>
        <option>Choose microphone</option>
        {  Object.keys(patterns).map((key, i) => {
            return <option value={patterns[key].btnLabel}>{patterns[key].btnLabel}</option>
    })}
      </select>
    )

}

export default Dropdown;