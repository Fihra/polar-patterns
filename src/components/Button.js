import { React } from 'react';
import usePattern from '../context/CanvasContext';

const Button = (props) => {
    const {key, btnLabel} = props;
    const { setPattern } = usePattern();

    const onChange = () => {
        setPattern(btnLabel);
    }

    return(
        <button className="pattern-btn" onClick={onChange} value={key}>
            {btnLabel}
        </button>
    )
}

export default Button;