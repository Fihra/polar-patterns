import data from './microphonesData.json';
import { Microphone } from './Microphone';

export const omnidirectionalData = {
    details: [
        "360\u00b0 angle",
        "sensitive sound input equally in all directions",
        "flat frequency/best bass response"
    ],
    //eslint-disable-next-line
    images: data.filter((mic) => {
        if(mic.micPattern === "Omnidirectional"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
        //eslint-disable-next-line
    })
}

export const bidirectionalData = {
    details: [
        "equal amount of sound from front & back of the mic",
        "least bass response",
        "for proximity settings"
    ],
    //eslint-disable-next-line
    images: data.filter((mic) => {
        if(mic.micPattern === "Bidirectional"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
       //eslint-disable-next-line
    })
}

export const cardioidData = {
    details: [
        "focused sound",
        "isolate microphone from unwanted ambient sounds",
        "greatly reduces sound behind the microphone"
    ],
    //eslint-disable-next-line
    images: data.filter((mic) => {
        if(mic.micPattern === "Cardioid"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        }
        //eslint-disable-next-line
    })
}

export const hypercardioidData = {
    details: [
    "sensitive to microphone placement",
    "narrow capturing, isolate sounds from sides",
    "most resistant to on-stage feedback",
    ],
    //eslint-disable-next-line
    images: data.filter((mic) => {
        if(mic.micPattern === "HyperCardioid"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
        //eslint-disable-next-line
    })
}

export const subcardioidData = {
    details: [
        "similar to omnidirectional, but reduced sound behind microphone",
        "receive audio signal from source & the acoustic environment"
    ],
    //eslint-disable-next-line
    images: data.filter((mic) => {
        if(mic.micPattern === "SubCardioid"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
        //eslint-disable-next-line
    })
}

export const shotgunData = {
    details: [
        "mostly used for voice recordings for film & TV",
        "small signals on the sides and more focused direction"
    ],
    //eslint-disable-next-line
    images: data.filter((mic) => {
        if(mic.micPattern === "Shotgun"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
        //eslint-disable-next-line
    })
} 


export const boundaryData = {
    details: [
        "hemispherical pattern",
        "common on studio and stage"
    ],
    //eslint-disable-next-line
    images: data.filter((mic) => {
        if(mic.micPattern === "Boundary"){
            return Microphone(mic.name, mic.cost, mic.imageUrl);
        } 
        //eslint-disable-next-line
    })
}