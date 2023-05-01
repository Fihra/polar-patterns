import{ React, useState } from "react";
import { diaphragmData, diaphragmDefinitions } from "./DiaphragmData";
import Tab from "./Tab";

const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setActiveAccordion(!activeAccordion);
        // setActiveAccordion(index === activeAccordion ? -1: index);
    }

    const testData = [
        "blahhh"
    ]

    const showAccordion = () => {
        return (
            <div className="tabs">
                {Object.keys(diaphragmData).map((data, index) => {
                return (
                    <Tab key={index} data={diaphragmData[data]} size={data}/>
                )
            })}
            </div>
        )
    }

    console.log(activeAccordion);
    return(
        // <div>
        //     {Object.keys(diaphragmData).map((item, index) => (
        //         <div key="index">
        //             <button onClick={() => handleClick(index)}>Diaphragm Size Info</button>
        //             {index === activeAccordion && <p>{item}</p>}
        //         </div>
        //     ))}
        // </div>
        <div className="accordion-container">
            <button onClick={(e) => handleClick(e)}>Diaphragm Size Info {activeAccordion ? "-" : "+" }</button>
            {activeAccordion ? showAccordion() : null}
        </div>
    )
}

export default Accordion;