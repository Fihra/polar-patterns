import { React, useContext } from "react";
import usePattern from '../context/CanvasContext';
import { PatternContext } from '../context/PatternContext';
import Carousel from 'react-spring-3d-carousel';

const Detail = (props) => {
    const { currentPattern } = usePattern();
    const patterns = useContext(PatternContext);

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

    const getSlides = () => {
        return patterns[currentPattern].info.images.map((image, key) => {
            return {
                key: key,
                content: 
                <div>
                    <h3>{image.name} </h3>
                    <p>${image.cost}</p>
                    <img style={{height: 100, width: 100}} src={require(`../assets/${image.imageUrl}`)} alt={key}/>
                </div>
            }
        })
    }

    const showInfo = () => {
        if(currentPattern !== "Clear"){
            return (
                <ul>
                    {patterns[currentPattern].info.details.map((point) => {
                        return <li>{point}</li>
                    })}
                </ul>
            )
        } 
        return <p>Select a pattern from the buttons above</p>
    }

    const showCarousel = () => {
        if(currentPattern !== "Clear") {
            return (
                <Carousel slides={getSlides()} showNavigation={true}/>
            )
        }
    }

    return(
        <div className="detail-container">
            <h2>{currentPattern !== "Clear" ? currentPattern : "Details"}</h2>
            {showInfo()}
            <h3>Examples (based on <a href="https://www.sweetwater.com/">Sweetwater</a> prices)</h3>
            <div className="carousel-container">
                {showCarousel()}
            </div>

            {/* <button onClick={playMusic}>Play</button>
            <button onClick={stopMusic}>Stop</button> */}
        </div>
    )
}   

export default Detail;