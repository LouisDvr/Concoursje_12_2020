import React, {Component} from "react";

class SocialNetworks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fbColor: "black",
            linkedInColor: "black"
        }
    }

    render() {
        return(
            <div className="d-flex flex-column justify-content-center align-items-center mb-2">
                <p className="fs-4 px-3 py-2 my-0">Nous suivre</p>
                <div>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                         className="bi bi-facebook mx-3 my-3" viewBox="0 0 16 16"
                         onMouseEnter={() => this.setState({fbColor: "#4267B2"})}
                         onMouseLeave={() => this.setState({fbColor: "black"})}>
                            <path fillRule="evenodd"
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                              color={this.state.fbColor}/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                         className="bi bi-linkedin mx-3 my-3" viewBox="0 0 16 16"
                         onMouseEnter={() => this.setState({linkedInColor: "#0E76A8"})}
                         onMouseLeave={() => this.setState({linkedInColor: "black"})}>
                            <path fillRule="evenodd"
                              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212h-2.4s.03-6.547 0-7.225h2.4v1.023a5.54 5.54 0 0 0-.016.025h.016v-.025c.32-.493.89-1.193 2.165-1.193 1.58 0 2.764 1.033 2.764 3.252v4.143h-2.4V9.529c0-.972-.348-1.634-1.217-1.634-.664 0-1.059.447-1.233.878-.063.154-.079.37-.079.586v4.035z"
                              color={this.state.linkedInColor}/>
                        </svg>
                    </a>
                </div>
            </div>
        );
    }
}

export default SocialNetworks;