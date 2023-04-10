import { useRef } from 'react';

export function useOnDraw() {
    const canvasRef = useRef(null);

    const setCanvasRef = (ref) => {
        if(!ref) return;
        canvasRef.current = ref;
    }

    return setCanvasRef;
}