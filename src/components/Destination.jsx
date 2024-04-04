import Mountain1 from "../images/Adventurous.jpg"
import Mountain2 from "../images/Authentic.jpg"
import Mountain3 from "../images/Normal.jpg"
import Mountain4 from "../images/Romantic.jpg"
import "./DestinationStyles.css"

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <div className="first-des">
                <div className="des-text">
                    <h2>Taal Volcano, Batangas</h2>
                    <p>One of the most iconic views in Luzon Mt Tall boasts a volcano inside a lake inside an island.</p>
                </div>
                <div className="image">
                <img src={Mountain1} alt="Image" />
                <img src={Mountain2} alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default Destination;