import React, {Component} from "react";
import ProductCard from "./ProductCard";

import auditImage from "./Images/network2_1920.jpg";
import nwScanImage from "./Images/Scan.png"
import pentestImage from "./Images/coding_1920.jpg";

class Expertise extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className="d-flex flex-column justify-content-center align-items-center pb-5" style={{backgroundColor: "#d4d4d4"}}>
              <h3 className="display-5 fw-bold px-3 py-3 my-3">Notre expertise...</h3>
              <div className="w-100 d-flex justify-content-evenly align-items-center">
                  <ProductCard img={auditImage} alt={"Illustration audit"} title={"Audit des processus"}
                               description={"Si les cibles des cyberattaques sont les systèmes d'information, les pirates " +
                               "utilisent souvent des erreurs humaines pour s'infiltrer. WireShield emploie vous propose " +
                               "d'analyser vos infrastructures et vos processus afin de détecter des défaillance de sécurité depuis vos locaux."}/>
                  <ProductCard img={nwScanImage} alt={"Illustration scan"} title={"Scan des systèmes informatiques"}
                               description={"WireShield propose WireScan®, un outil très puissant vous permettant en quelques " +
                               "clics de paramétrer des scans, ponctuels ou réguliers, de vos réseaux et d'être allerté en cas de failles de sécurité."}/>
                  <ProductCard img={pentestImage} alt={"Illustration pentesting"} title={"Pentesting"}
                               description={"Nos experts peuvent tenter de s'introduire dans vos SI, comme le feraient de " +
                               "vrais hackers, pour détecter d'éventuelles failles de sécurité."}/>
              </div>
          </div>
        );
    }
}

export default Expertise;