import React from "react";

const Detail = () => {
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

    return(
        <div>
            <h2>Microphone Pattern:</h2>
            <p>
                Information about the polar pattern goes in this section over here that I am including in this p tag portion for the body of this container as you can see from this.
            </p>
            {/* <button onClick={playMusic}>Play</button>
            <button onClick={stopMusic}>Stop</button> */}
        </div>
    )
}   

export default Detail;