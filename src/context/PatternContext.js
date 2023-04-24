import { createContext } from 'react';
import { omnidirectionalData, bidirectionalData, cardioidData, hypercardioidData, subcardioidData, shotgunData, boundaryData } from '../components/patternData';

const patterns = {
    "Clear": {
        btnLabel: "Clear",
    },
    "Omnidirectional": {
        btnLabel: "Omnidirectional",
        info: omnidirectionalData
    },
    "Bidirectional": {
        btnLabel: "Bidirectional",
        info: bidirectionalData
    },
    "Cardioid": {
        btnLabel: "Cardioid",
        info: cardioidData
    },
    "HyperCardioid": {
        btnLabel: "HyperCardioid",
        info: hypercardioidData
    },
    "SubCardioid": {
        btnLabel: "SubCardioid",
        info: subcardioidData
    },
    "Shotgun": {
        btnLabel: "Shotgun",
        info: shotgunData
    },
    "Boundary": {
        btnLabel: "Boundary",
        info: boundaryData
    }
}

export const PatternContext = createContext(patterns);