import { useEffect, useRef } from 'react';
import { useOnDraw } from './Hooks';

const Canvas = (props) => {
    const canvasRef = useRef(null);

    const { currentPattern } = props;


    const drawOmnidirectional = (context) => {
        //Omnidirectional
        context.strokeStyle = "red";
        context.beginPath();
        context.arc(350, 350, 296, 0, 2 * Math.PI);
        context.fillStyle = 'rgba(500, 0, 0, 0.2)';
        context.fill();
        context.stroke();
        context.closePath();
    }

    const drawBidirectional = (context) => {
        //Bidirectional
        context.strokeStyle = "orange";
        context.beginPath();
        context.arc(350, 200,150, 0, 2 * Math.PI);
        context.fillStyle = 'rgba(100, 100, 0, 0.2)';
        context.fill();
        context.stroke();
        context.closePath();

        context.strokeStyle = "orange";
        context.beginPath();
        context.arc(350, 500,150, 0, 2 * Math.PI);
        context.fillStyle = 'rgba(100, 100, 0, 0.2)';
        context.fill();
        context.stroke();
        context.closePath();
    }

    const drawCardioid = (context) => {
        //Cardioid
        context.strokeStyle = "green";
        context.beginPath();
        context.arc(350, 470, 180, 0, 2 * Math.PI);
        context.fillStyle = 'rgba(0, 200, 0)';
        context.fill();
        context.closePath();

        context.strokeStyle = "green";
        context.beginPath();
        context.arc(260, 320, 80, 0, 2 * Math.PI);
        context.fillStyle = 'rgba(0, 200, 0)';
        context.fill();
        context.closePath();

        context.strokeStyle = "green";
        context.beginPath();
        context.arc(420, 320, 80, 0, 2 * Math.PI);
        context.fillStyle = 'rgba(0, 200, 0)';
        context.fill();
        context.closePath();
    }

    useEffect(() => {
        console.log(currentPattern);
    }, [currentPattern]);

    useEffect(() => {
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
        context.strokeStyle = 'blue';
        context.beginPath();
        context.arc(350, 350, 300, 0, 2 * Math.PI);
        context.stroke();
        context.closePath();

        switch(currentPattern) {
            case "CLEAR":
                break;
            case "OMNIDIRECTIONAL":
                drawOmnidirectional(context);
                break;
            case "BIDIRECTIONAL":
                drawBidirectional(context);
                break;
            case "CARDIOID":
                drawCardioid(context);
                break;
            default:
                return;
        }

        //Omnidirectional
        // context.strokeStyle = "red";
        // context.beginPath();
        // context.arc(350, 350, 296, 0, 2 * Math.PI);
        // context.fillStyle = 'rgba(500, 0, 0, 0.2)';
        // context.fill();
        // context.stroke();
        // context.closePath();

        //Bidirectional
        // context.strokeStyle = "orange";
        // context.beginPath();
        // context.arc(350, 200,150, 0, 2 * Math.PI);
        // context.fillStyle = 'rgba(100, 100, 0, 0.2)';
        // context.fill();
        // context.stroke();
        // context.closePath();

        // context.strokeStyle = "orange";
        // context.beginPath();
        // context.arc(350, 500,150, 0, 2 * Math.PI);
        // context.fillStyle = 'rgba(100, 100, 0, 0.2)';
        // context.fill();
        // context.stroke();
        // context.closePath();

        //Cardioid
        // context.strokeStyle = "green";
        // context.beginPath();
        // context.arc(350, 470, 180, 0, 2 * Math.PI);
        // context.fillStyle = 'rgba(0, 200, 0)';
        // context.fill();
        // context.closePath();

        // context.strokeStyle = "green";
        // context.beginPath();
        // context.arc(260, 320, 80, 0, 2 * Math.PI);
        // context.fillStyle = 'rgba(0, 200, 0)';
        // context.fill();
        // context.closePath();

        // context.strokeStyle = "green";
        // context.beginPath();
        // context.arc(420, 320, 80, 0, 2 * Math.PI);
        // context.fillStyle = 'rgba(0, 200, 0)';
        // context.fill();
        // context.closePath();

    }, [currentPattern]);

    return (
        <>
        <h1>HI: {currentPattern}</h1>
        <canvas id="canvas" width='700' height='700'
            ref={canvasRef}
        />
        </>
    )
}

export default Canvas;