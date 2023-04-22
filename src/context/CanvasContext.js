import { createContext, useReducer, useContext } from 'react';
import PatternReducer, { initialState } from '../components/reducers/PatternReducer';

export const CanvasProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PatternReducer, initialState);

    const setPattern = (pattern) => {
        dispatch({
            type: "SET_PATTERN",
            payload: {
                pattern: pattern,
            }
        })
    }

    const value = {
        currentPattern: state.currentPattern,
        setPattern,
    }

    return <CanvasContext.Provider value={value}>{children}</CanvasContext.Provider>
}

const usePattern = () => {
    const context = useContext(CanvasContext);
    if(context === undefined) {
        throw new Error("no pattern context found");
    }

    return context;
}

export default usePattern;

export const CanvasContext = createContext(initialState);