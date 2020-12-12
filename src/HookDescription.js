import React, {Component} from "react";

class HookDescription extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="d-flex flex-column justify-content-center align-items-center px-5 py-5 bg-light">
                <figure className="px-3 py-3 rounded-3" style={{width: "65vw", backgroundColor: "#E8E8E8", boxShadow: "2px 2px 8px black"}}>
                    <blockquote className="blockquote">
                        <p className="fs-1">Ignorer la cybersécurité, c'est "rouler à 200 km/h à moto sur l'autoroute, sans casque"</p>
                    </blockquote>
                    <figcaption className="blockquote-footer fs-5">
                        Guillaume Poupard, directeur général de l'agence nationale de la sécurité des systèmes informatiques (Anssi)
                    </figcaption>
                </figure>
                <p className="px-3 py-3 mx-4 my-3 justify-content-center" style={{textAlign: "justify"}}>
                    Alors que de plus en plus d'entreprises accélèrent leur transition numérique, de nouvelles menaces émergent.
                    Des individus profitent du manque d'expérience de ces entreprises pour s'enrichir à leurs dépends.
                    Leurs objectifs sont divers : vol de données privées dans le but de les revendre, blocage des systèmes informatiques et demande de rançon pour leur déblocage...
                    De même, leur modes d'actions sont variés, allant de l'attaque brutale des systèmes ciblés pour forcer le passage, à l'exploitation de l'innocence des employés de l'entreprise.
                    Dans tous les cas, ces actions nuisent gravement aux activités des entreprises qui en sont victimes,
                    alors <span className="fw-bold">n'attendez plus</span> et mettez en œuvre des moyens pour vous protéger.
                    <span className="fw-bold"> Nous sommes là pour vous aider.</span>
                </p>
            </div>
        );
    }
}

export default HookDescription;