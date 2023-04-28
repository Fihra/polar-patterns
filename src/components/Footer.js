import { React } from 'react';

const Footer = () => {

    const resourceLink = "https://mynewmicrophone.com/what-is-an-omnidirectional-microphone-polar-pattern-mic-examples/";

    return(
        <footer>
            <p>Information based from <a href={resourceLink}>My New Microphone</a></p>
            <p>Built in React.js by Fabian Fabro.</p>
        </footer>
    )
}

export default Footer;