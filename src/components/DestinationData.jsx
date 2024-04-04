import { Component } from "react";
import Mountain1 from "../images/Adventurous.jpg"
import Mountain2 from "../images/Authentic.jpg"
import Mountain3 from "../images/Normal.jpg"
import Mountain4 from "../images/Romantic.jpg"
import "./DestinationStyles.css";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="Image" />
                    <img src={this.props.img2} alt="Image" />
                </div>
            </div>
        )
    }
}

export default DestinationData;