import React, { useState } from "react";
import { diaphragmDefinitions } from "./DiaphragmData";

const Tab = (props) => {
    const [panelActive, setPanelActive] = useState(false);
    const [currentHover, setCurrentHover] = useState("");
    const { size, data } = props;

    const showPanel = () => {
        setPanelActive(true);
    }

    const hidePanel = () => {
        setPanelActive(false);
        hideHover();
    }
    
    const showHover = (event) => {
        setCurrentHover(event.currentTarget.dataset.info);
    }

    const hideHover = () => {
        setCurrentHover("");
    }

    return (
        <div className="tab-container">
            <section>
            <h3>{size}</h3>
            {panelActive ? <div className="panel"><p>{diaphragmDefinitions[currentHover]}</p></div> : ""}
            {Object.keys(data).map((item) => {
                const original = item;
                const words = item.split(/(?=[A-Z])/);
                const firstLetter = words[0].charAt(0).toUpperCase();
                const remainingLetters = words[0].substring(1);
                words[0] = firstLetter + remainingLetters;

                return (
                    <div >
                        <div className="diaphragm-category" onMouseEnter={showPanel} onMouseOut={hidePanel} data-info={original} onMouseOver={showHover}>
                            
                            <p><b>{words.length > 1 ? words[0] + ' ' + words[1] : words[0]}:</b> {data[item]}</p>
                        </div>
                    
                    </div>
                )
            })}
            </section>
        </div>
    )
}

export default Tab;