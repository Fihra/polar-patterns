import React, { useState } from "react";
import { diaphragmDefinitions } from "./DiaphragmData";
import { Tooltip } from "react-tooltip";

const Tab = (props) => {
    const [currentMicInfo, setcurrentMicInfo] = useState("");
    const [mobilePanel, setMobilePanel] = useState(false);
    const { size, data, windowSize } = props;
    
    const showMicInfo = (event) => {
        setcurrentMicInfo(event.currentTarget.dataset.info);
    }

    const hideMicInfo = () => {
        setcurrentMicInfo("");
    }

    const showList = () => {
        return Object.keys(data).map((item, tooltip) => {
            const original = item;
            const words = item.split(/(?=[A-Z])/);
            const firstLetter = words[0].charAt(0).toUpperCase();
            const remainingLetters = words[0].substring(1);
            words[0] = firstLetter + remainingLetters;
            if(windowSize[0] > 400){
                return (
                    <div>
                        <div>
                            <p><b className="diaphragm-category" onMouseOut={hideMicInfo} data-info={original} onMouseOver={showMicInfo} data-tooltip-id="my-tooltip" data-tooltip-content={diaphragmDefinitions[currentMicInfo]}>{words.length > 1 ? words[0] + ' ' + words[1] : words[0]}:</b> {data[item]}</p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div style={{position: "relative"}}>
                        {mobilePanel && item === currentMicInfo ? <div className="mobile-panel">{diaphragmDefinitions[currentMicInfo]}</div> : null}
                            <p><b className="diaphragm-category" onClick={toggleMobileTooltip} data-info={original}>{words.length > 1 ? words[0] + ' ' + words[1] : words[0]}:</b> {data[item]}</p>
                        </div>
                    </div>
                )
            }

        })
    }

    const toggleMobileTooltip = (e) => {
        if(mobilePanel){
            setMobilePanel(false);
            hideMicInfo();
        } else {
            setMobilePanel(true);
            setcurrentMicInfo(e.currentTarget.dataset.info);
        }
        console.log("show mobile panel");
    }

    const hideMobileTooltip = () => {
        return 
    }

    return (
        <div className="tab-container">
            <section>
            <h3>{size}</h3>
            <Tooltip id="my-tooltip"/>
            {showList()}
            </section>
        </div>
    )
}

export default Tab;