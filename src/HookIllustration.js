import React, {Component} from "react";
import illustration from "./Images/network1_1920.jpg";

class HookIllustration extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div style={{backgroundImage: "url("+illustration+")", height: 640}} className="d-flex justify-content-center align-items-center">
                <p className="text-white text-center display-4" style={{textShadow: "2px 2px 4px black"}}><span className="fw-bolder display-2">
                    Notre expertise</span> pour <span className="text-decoration-underline">protéger ce qui compte
                    </span> pour <span className="fw-bolder display-2">vous</span>.
                </p>
            </div>
        );
    }
}

export default HookIllustration;