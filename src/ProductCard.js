import React, {Component} from "react"

class ProductCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="card border-0 bg-light" style={{width: "23rem", borderRadius: "10px"}}>
                <img src={this.props.img} className="card-img-top" alt={this.props.alt} style={{borderRadius: "10px 10px 0 0"}}/>
                <div className="card-body text-light pb-4" style={{backgroundColor: "#0a0d33", borderRadius: "0 0 10px 10px"}}>
                    <h5 className="text-center fw-bold">{this.props.title}</h5>
                    <p className="card-text" style={{textAlign: "justify"}}>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default ProductCard;