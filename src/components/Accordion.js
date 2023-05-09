import{ React, useState } from "react";
import { diaphragmData } from "./DiaphragmData";
import Tab from "./Tab";
import minusSign from '../assets/icons/minus_symbol.png';
import plusSign from '../assets/icons/plus_symbol.png';
import { CSSTransition } from "react-transition-group";

const Accordion = (props) => {
    const [activeAccordion, setActiveAccordion] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setActiveAccordion(!activeAccordion);
    }

    const showAccordion = () => {
        return (
            <div className="tabs">
                {Object.keys(diaphragmData).map((data, index) => {
                return (
                    <Tab key={index} data={diaphragmData[data]} size={data} windowSize={props.windowSize}/>
                )
            })}
            </div>
        )
    }

    return(
        <div>
            <CSSTransition in={activeAccordion} timeout={200} classNames="tab-container">
            <div className="accordion-container">
                <button onClick={(e) => handleClick(e)}>Diaphragm Size Info <img className="accordion-icon" src={activeAccordion ? minusSign : plusSign} alt="open or closed accordion"/></button>
                {activeAccordion ? showAccordion() : null}
            </div>
            </CSSTransition>
        </div>
    )
}

export default Accordion;