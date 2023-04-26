import AKG_p420 from '../assets/akg-p420.png';
import AT4022 from '../assets/audio-technica-at4022.png';
import Shure_beta_181 from '../assets/shure-beta-181.png';
import { Microphone } from './Microphone';
 
const microphoneOne = Microphone("AKG p420", 140, AKG_p420);
const microphoneTwo = Microphone("AT4022", 300, AT4022);
const microphoneThree = Microphone("Shure Beta 181", 550, Shure_beta_181);

export const omnidirectionalData = {
    
    details: [
        "360\u00b0 angle",
        "flat frequency/best bass response"
    ],
    images: [
        microphoneOne,
        microphoneTwo,
        microphoneThree
    ]
}


export const bidirectionalData = {
    details: [
        "equal amount of sound from front and back of the mic",
        "least bass response"
    ],
    images: [

    ]
}

export const cardioidData = {
    details: [
        "focused sound",
        "isolate microphone from unwanted ambient sounds",
        "greatly reduces sound behind the microphone"
    ],
    images: [

    ]
}

export const hypercardioidData = {
    details: [
    "sensitive to microphone placement",
    "narrow capturing, isolate sounds from sides",
    "most resistant to on-stage feedback",
    ],
    images: [

    ]
}

export const subcardioidData = {
    details: [
        "similar to omnidirectional, but reduced sound behind microphone"
    ],
    images: [

    ]
}

export const shotgunData = {
    details: [
        "mostly used for voice recordings for film & TV",
        "small signals on the sides and more focused direction"
    ],
    images: [

    ]
} 


export const boundaryData = {
    details: [
        "hemispherical pattern",
        "common on studio and stage"
    ],
    images: [

    ]
}