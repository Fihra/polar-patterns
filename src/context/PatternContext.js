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
    "Cardioid": {
        btnLabel: "Cardioid"
    },
    "HyperCardioid": {
        btnLabel: "HyperCardioid"
    },
    "SubCardioid": {
        btnLabel: "SubCardioid"
    },
    "Shotgun": {
        btnLabel: "Shotgun"
    },
    "Boundary": {
        btnLabel: "Boundary"
    }
}

export const PatternContext = createContext(patterns);