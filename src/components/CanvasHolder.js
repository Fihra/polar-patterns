import { useEffect, useRef, useContext } from 'react';
import { PatternContext } from '../context/PatternContext';
import usePattern from '../context/CanvasContext';

const CanvasHolder = (props) => {
    const canvasRef = useRef(null);
    const { currentPattern } = usePattern();
    const { windowSize } = props;

    const red = 'rgba(500, 0, 0, 0.5)';//Omnidirectional
    const orange = 'rgba(250, 190, 88, 0.5)';//Bidirectional
    const green = 'rgba(0, 200, 0, 0.5)';//Cardioid
    const purple = 'rgba(102, 51, 153, 0.5)';//HyperCardioid
    const blue = 'rgba(3, 138, 255, 0.5)';//Subcardioid
    const yellow = 'rgba(233, 212, 96, 0.5)';//Shotgun
    const brown = 'rgba(130, 94, 92, 0.5)';//Boundary

    const scalePercentage = (canvasSize, radius) => {
        return canvasSize * radius;
    }

    const mobileScale = () => {
        return windowSize[0] < 940;
    }

    const drawOmnidirectional = (context, canvas) => {
        //Omnidirectional
        context.strokeStyle = red;
        context.beginPath();
        context.arc(canvas.width/2, canvas.height/2, canvas.height/2 - 50, 0, 2 * Math.PI);
        context.fillStyle = red;
        context.fill();
        context.stroke();
        context.closePath();
    }

    const drawBidirectional = (context, canvas) => {
        const bidirectionalRadius = 0.57;
        const scaleSize = 0.72;
        
        //Bidirectional
        context.strokeStyle = orange;
        context.beginPath();
        context.arc(canvas.width/2, mobileScale() ? canvas.height - scalePercentage(canvas.height, scaleSize - 0.06) : canvas.height - scalePercentage(canvas.height, scaleSize), canvas.height/2 - scalePercentage(canvas.height/2, bidirectionalRadius), 0, 2 * Math.PI);
        context.fillStyle = orange;
        context.fill();
        context.stroke();
        context.closePath();

        context.strokeStyle = orange;
        context.beginPath();
        context.arc(canvas.width/2, mobileScale() ? canvas.height - scalePercentage(canvas.height, 1.00 - scaleSize + 0.04): canvas.height - scalePercentage(canvas.height, 1.00 - scaleSize) , canvas.height/2 - scalePercentage(canvas.height/2, bidirectionalRadius) - 5, 0, 2 * Math.PI);
        context.fillStyle = orange;
        context.fill();
        context.stroke();
        context.closePath();
    }

    const drawCardioid = (context, canvas) => {
        //Cardioid
        context.strokeStyle = green;
        context.beginPath();
        !mobileScale() ? context.arc(canvas.width/2, 470, 180, 0, 2 * Math.PI) : context.arc(canvas.width/2, 260, 90, 0, 2 * Math.PI);
        context.fillStyle = green;
        context.fill();
        context.stroke();
        context.closePath();

        context.strokeStyle = green;
        context.beginPath();
        !mobileScale() ? context.arc(270, 320, 80, 0, 2 * Math.PI) : context.arc(250, canvas.height/2 - 20, 40, 0, 2 * Math.PI);
        context.fillStyle = green;
        context.fill();
        context.stroke();
        context.closePath();

        context.strokeStyle = green;
        context.beginPath();
        !mobileScale() ? context.arc(430, 320, 80, 0, 2 * Math.PI) : context.arc(150, canvas.height/2 - 20, 40, 0, 2 * Math.PI);
        context.fillStyle = green;
        context.fill();
        context.stroke();
        context.closePath();
    }

    const drawHypercardioid = (context, canvas) => {
        //Hypercardioid
        context.strokeStyle = purple;
        context.beginPath();
        !mobileScale() ? context.arc(canvas.width/2, 490, 160, 0, 2 * Math.PI) : context.arc(canvas.width/2, 270, 80, 0, 2 * Math.PI);
        context.fillStyle = purple;
        context.fill();
        context.stroke();
        context.closePath();

        context.strokeStyle = purple;
        context.beginPath();
        !mobileScale() ? context.arc(260, 400, 80, 0, 2 * Math.PI) : context.arc(250, 220, 40, 0, 2 * Math.PI);
        context.fillStyle = purple;
        context.fill();
        context.stroke();
        context.closePath();

        context.strokeStyle = purple;
        context.beginPath();
        !mobileScale() ? context.arc(440, 400, 80, 0, 2 * Math.PI) : context.arc(150, 220, 40, 0, 2 * Math.PI);
        context.fillStyle = purple;
        context.fill();
        context.stroke();
        context.closePath();

        context.strokeStyle = purple;
        context.beginPath();
        !mobileScale() ? context.arc(350, 230, 100, 0, 2 * Math.PI) : context.arc(canvas.width/2, 140, 50, 0, 2 * Math.PI);
        context.fillStyle = purple;
        context.fill();
        context.stroke();
        context.closePath();
    }

    const drawSubcardioid = (context, canvas) => {
        //Subcardioid
        context.strokeStyle = blue;
        context.beginPath();
        context.arc(350, 410, 240, 0, 2 * Math.PI);
        context.fillStyle = blue;
        context.fill();
        context.stroke();
        context.closePath();
    }

    const drawShotgun = (context, canvas) => {
        //Subcardioid
        context.strokeStyle = yellow;
        context.save();
        context.translate(context.width/2, context.height/2);
        context.scale(2, 1);
        context.beginPath();
        context.arc(140, 350, 30, 0, 2 * Math.PI);
        context.restore();
        context.fillStyle = yellow;
        context.fill();
        context.stroke();
        context.closePath();

        context.save();
        context.translate(context.width/2, context.height/2);
        context.scale(2, 1);
        context.beginPath();
        context.arc(210, 350, 30, 0, 2 * Math.PI);
        context.restore();
        context.fillStyle = yellow;
        context.fill();
        context.stroke();
        context.closePath();

        context.save();
        context.translate(context.width/2, context.height/2);
        context.scale(1, 2);
        context.beginPath();
        context.arc(350, 250, 75, 0, 2 * Math.PI);
        context.restore();
        context.fillStyle = yellow;
        context.fill();
        context.stroke();
        context.closePath();

        context.save();
        context.translate(context.width/2, context.height/2);
        context.scale(1, 2);
        context.beginPath();
        context.arc(350, 115, 55, 0, 2 * Math.PI);
        context.restore();
        context.fillStyle = yellow;
        context.fill();
        context.stroke();
        context.closePath();
    }

    const drawBoundary = (context, canvas) => {
        //Boundary
        context.strokeStyle = brown;
        context.beginPath();
        context.arc(350, 350, 296, 0, Math.PI);
        context.fillStyle = brown;
        context.fill();
        context.stroke();
        context.closePath();
    }

    const drawListener = (context, canvas) => {
        //Listener
        context.strokeStyle = 'black';
        context.beginPath();
        context.arc(canvas.width/2, canvas.height/2, 10, 0, 2 * Math.PI);
        context.stroke();
        context.closePath();
    }

    useEffect(() => {
        // drawing();
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }
        
        const context = canvas.getContext('2d');
        if(!context) {
            return;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);

        //Canvas
        context.strokeStyle = 'black';
        context.beginPath();
        context.arc(canvas.width/2, canvas.height/2, canvas.width/2 - 50, 0, 2 * Math.PI);
        context.stroke();
        context.closePath();
        
        drawListener(context, canvas);

        switch(currentPattern) {
            case "Clear":
                break;
            case "Omnidirectional":
                drawOmnidirectional(context, canvas);
                break;
            case "Bidirectional":
                drawBidirectional(context, canvas);
                break;
            case "Cardioid":
                drawCardioid(context, canvas);
                break;
            case "HyperCardioid":
                drawHypercardioid(context, canvas);
                break;
            case "SubCardioid":
                drawSubcardioid(context, canvas);
                break;
            case "Shotgun":
                drawShotgun(context, canvas);
                break;
            case "Boundary":
                drawBoundary(context, canvas);
                break;
            default:
                return;
        }

    }, [currentPattern, windowSize]);

    const checkWindowSize = () => {
        if(mobileScale()) {
            return (
                <canvas id="canvas" width="400px" height="400"
                 ref={canvasRef}/>
            )
        } else {
            return (
                <canvas id="canvas" width="700px" height="700"
                ref={canvasRef}/>
            )
        }
    }

    return (
        <div className="canvas-container">
            {checkWindowSize()}
        </div>
    )
}

export default CanvasHolder;