import React, {Component} from "react";
import logo from "./Images/LogoWS.png";

class WireShieldLogo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="d-flex flex-column justify-content-center align-items-center px-4 py-4">
                <img src={logo} alt={"logo"} width="100" height="115"/>
                <p className="my-0">WireShield</p>
            </div>
        );
    }
}

export default WireShieldLogo;