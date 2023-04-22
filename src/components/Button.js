import { React } from 'react';
import usePattern from '../context/CanvasContext';

const Button = (props) => {
    const {key, btnLabel} = props;
    const { currentPattern, setPattern } = usePattern();

    const onChange = () => {
        console.log("Current Pattern: ", currentPattern);
        setPattern(btnLabel);
    }

    return(
        <button onClick={onChange} value={key}>
            {btnLabel}
        </button>
    )
}

export default Button;