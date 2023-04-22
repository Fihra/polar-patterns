import PATTERNACTIONS from '../actions/PatternActions';

export const initialState = {
    currentPattern: "Clear"
}

const PatternReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case PATTERNACTIONS.SET_PATTERN:
            return {
                ...state,
                currentPattern: payload.pattern
            }
        default:
            return state;
    }
}

export default PatternReducer;