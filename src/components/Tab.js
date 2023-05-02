import React, { useState } from "react";
import { diaphragmDefinitions } from "./DiaphragmData";
import { Tooltip as ReactTooltip, Tooltip } from "react-tooltip";

const Tab = (props) => {
    const [currentMicInfo, setcurrentMicInfo] = useState("");
    const { size, data } = props;
    
    const showMicInfo = (event) => {
        setcurrentMicInfo(event.currentTarget.dataset.info);
    }

    const hideMicInfo = () => {
        setcurrentMicInfo("");
    }

    return (
        <div className="tab-container">
            <section>
            <h3>{size}</h3>
            <Tooltip id="my-tooltip" />
            {Object.keys(data).map((item, tooltip) => {
                const original = item;
                const words = item.split(/(?=[A-Z])/);
                const firstLetter = words[0].charAt(0).toUpperCase();
                const remainingLetters = words[0].substring(1);
                words[0] = firstLetter + remainingLetters;
                console.log(tooltip)
                return (
                    <div >
                        <div >
                            
                            <p><b className="diaphragm-category" onMouseOut={hideMicInfo} data-info={original} onMouseOver={showMicInfo} data-tooltip-id="my-tooltip" data-tooltip-content={diaphragmDefinitions[currentMicInfo]}>{words.length > 1 ? words[0] + ' ' + words[1] : words[0]}:</b> {data[item]}</p>
                        </div>
                        
                    </div>
                )
            })}
            </section>
        </div>
    )
}

export default Tab;