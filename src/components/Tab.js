import React from "react";

const Tab = (props) => {
    const { size, data } = props;

    return (
        <div className="tab-container">
            <h3>{size}</h3>

            {Object.keys(data).map((item) => {
                const words = item.split(/(?=[A-Z])/);
                const firstLetter = words[0].charAt(0).toUpperCase();
                const remainingLetters = words[0].substring(1);
                words[0] = firstLetter + remainingLetters;

                return (
                    <p><b>{words.length > 1 ? words[0] + ' ' + words[1] : words[0]}:</b> {data[item]}</p>
                )
            })}
        </div>
    )
}

export default Tab;