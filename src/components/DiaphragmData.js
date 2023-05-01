export const diaphragmData = {
    "Large": {
        diaphragmSize: "1\" (25.4mm) or more",
        transientResponse: "less accurate",
        frequencyResponse: "more colored, mainly in high-end",
        addressType: "typically side",
        polarPatterns: "any pattern, less consistent",
        sensitivity: "high",
        selfNoise: "less",
        price: "inexpensive to expensive"
    } ,
    "Small": {
        diaphragmSize: "1/2\" (12.7mm) or less",
        transientResponse: "more accurate",
        frequencyResponse: "flatter and more extended",
        addressType: "top or side",
        polarPatterns: "any pattern, more consistent",
        sensitivity: "high",
        selfNoise: "more",
        price: "cheap to very expensive"
    }
}

export const diaphragmDefinitions = {
    diaphragmSize: "Size of the diaphragm",
    transientResponse: "the initial peak of a sound (1st spike in the waveform)",
    frequencyResponse: "range of the sound that a microphone can reproduce and how its output varies within its range",
    addressType: "Angle where the microphone points to capture sound",
    polarPatterns: "consistency use of patterns",
    sensitivity: "high",
    selfNoise: "microphone's audio signal adds noise when processed (often boosted levels)",
    price: "usually large are more expensive than small"
}