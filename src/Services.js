import React, {Component} from "react";
import supportImg from "./Images/supportResized.jpg"
import partnershipImg from "./Images/NordVPN_Partnership.png"

class Services extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="d-flex flex-column justify-content-center align-items-center pb-5">
                <h3 className="display-5 fw-bold px-3 py-3 my-3">À votre service</h3>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={supportImg} className="d-block w-100" alt="Illustration accompagnement"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="fs-1 fw-bold" style={{textShadow: "2px 2px 4px black"}}>Un accompagnement personnalisé</h5>
                                    <p className="fs-5" style={{textShadow: "2px 2px 4px black"}}>
                                        Nos solutions sont adaptées à votre structure et nos conseillers sont là pour répondre à vos questions.
                                        De plus, nos équipes sont sont en permanence sur le qui-vive pour vous épauler efficacement en cas d'attaque.
                                    </p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={partnershipImg} className="d-block w-100" alt="Illustration partenariat NordVPN"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-dark fs-3 fw-bold">Un VPN pour sécuriser vos connexions à distance</h5>
                                    <p className="text-dark">
                                        Alors que la part de télétravail dans les entreprises a considérablement augmenté,
                                        il devient nécessaire de pouvoir se connecter aux serveurs situés dans les locaux de l'entreprise
                                        de façon sécurisée. WireShield s'associe donc à NordVPN® pour vous proposer un outil à la pointe de la technologie
                                        afin de pouvoir continuer votre activité à distance en toute sécurité.
                                    </p>
                                </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                       data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                       data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Services;