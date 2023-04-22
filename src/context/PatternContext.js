import { createContext } from 'react';

const patterns = {
    "Clear": {
        btnLabel: "Clear",
    },
    "Omnidirectional": {
        btnLabel: "Omnidirectional"
    },
    "Bidirectional": {
        btnLabel: "Bidirectional"
    },
    "Xardioid": {
        btnLabel: "Cardioid"
    }
}

export const PatternContext = createContext(patterns);