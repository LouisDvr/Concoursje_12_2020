import React, {Component} from "react";
import SocialNetworks from "./SocialNetworks";
import WireShieldLogo from "./WireShieldLogo";

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="d-flex justify-content-evenly bg-light">
                <WireShieldLogo/>
                <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                    <p className="fs-4 px-3 py-3 my-0">Nous contacter</p>
                    <a href="mailto:contact.wireshield@gmail.com" className="text-decoration-none link-dark fs-5">contact.wireshield@gmail.com</a>
                </div>
                <SocialNetworks/>
            </footer>
        );
    }
}

export default Footer;