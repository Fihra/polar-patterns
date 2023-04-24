import { React, useContext } from "react";
import usePattern from '../context/CanvasContext';
import { PatternContext } from '../context/PatternContext';

const Detail = (props) => {
    const { currentPattern } = usePattern();
    const patterns = useContext(PatternContext);

    console.log(patterns[currentPattern]);

    // const audioCtx = new AudioContext();

    // const posX = window.innerWidth / 2;
    // const posY = window.innerHeight / 2;
    // const posZ = 300;

    // const test = {
    //     positionX: 1,
    //     positionZ: 0,
    //     positionY: -1,
    //     // coneInnerAngle: 10,
    //     // coneOuterAngle: 45,
    //     maxDistance: 5000,
    //     panningModel: "HRTF"
    // }

    // const panner = new PannerNode(audioCtx, test);

    // const audioElement = new Audio(musicTrack);
    // audioElement.loop = true;

    // const track = audioCtx.createMediaElementSource(audioElement);
    // track.connect(panner).connect(audioCtx.destination);

    // const playMusic = () => {
    //     console.log("play MUsic");
    //     audioElement.play();
    // }

    // const stopMusic = () => {
    //     console.log("stop music");
    //     audioElement.pause();
    // }

    const showInfo = () => {
        console.log(currentPattern);
        console.log(patterns[currentPattern].info);
        if(currentPattern !== "Clear"){
            return (
                <ul>
                    {patterns[currentPattern].info.map((point) => {
                        return <li>{point}</li>
                    })}
                </ul>
            )
        }
    }

    return(
        <div>
            <h2>Details</h2>
            {showInfo()}
            <p>
                Information about the polar pattern goes in this section over here that I am including in this p tag portion for the body of this container as you can see from this.
            </p>
            {/* <button onClick={playMusic}>Play</button>
            <button onClick={stopMusic}>Stop</button> */}
        </div>
    )
}   

export default Detail;