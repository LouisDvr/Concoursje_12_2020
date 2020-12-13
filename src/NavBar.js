import React, {Component} from "react";
import logo from "./Images/LogoWS.png";

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex" href="#">
                        <img src={logo} alt={"logo"} width="60" height="68" className="d-inline-block align-top"/>
                        <p className="my-auto mx-3">WireShield</p>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse ps-2" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link mx-2" href="#services">Nos services</a>
                            <a className="nav-link mx-2" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;