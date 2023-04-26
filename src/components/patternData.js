import data from './microphonesData.json';
import { Microphone } from './Microphone';

export const omnidirectionalData = {
    details: [
        "360\u00b0 angle",
        "flat frequency/best bass response"
    ],
    images: data.filter((mic, key) => {
        if(mic.micPattern === "Omnidirectional"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
    })
}

export const bidirectionalData = {
    details: [
        "equal amount of sound from front and back of the mic",
        "least bass response"
    ],
    images: data.filter((mic, key) => {
        if(mic.micPattern === "Bidirectional"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
    })
}

export const cardioidData = {
    details: [
        "focused sound",
        "isolate microphone from unwanted ambient sounds",
        "greatly reduces sound behind the microphone"
    ],
    images: data.filter((mic, key) => {
        if(mic.micPattern === "Cardioid"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
    })
}

export const hypercardioidData = {
    details: [
    "sensitive to microphone placement",
    "narrow capturing, isolate sounds from sides",
    "most resistant to on-stage feedback",
    ],
    images: data.filter((mic, key) => {
        if(mic.micPattern === "HyperCardioid"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
    })
}

export const subcardioidData = {
    details: [
        "similar to omnidirectional, but reduced sound behind microphone"
    ],
    images: data.filter((mic, key) => {
        if(mic.micPattern === "SubCardioid"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
    })
}

export const shotgunData = {
    details: [
        "mostly used for voice recordings for film & TV",
        "small signals on the sides and more focused direction"
    ],
    images: data.filter((mic, key) => {
        if(mic.micPattern === "Shotgun"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
    })
} 


export const boundaryData = {
    details: [
        "hemispherical pattern",
        "common on studio and stage"
    ],
    images: data.filter((mic, key) => {
        if(mic.micPattern === "Boundary"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
    })
}