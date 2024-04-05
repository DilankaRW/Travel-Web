import Mountain1 from "../images/Normal.jpg"
import Mountain2 from "../images/arugam_bay.jpg"
import Mountain3 from "../images/sinharaja.jpg"
import Mountain4 from "../images/bambarakanda_falls.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
            className="first-des"
            heading="Taal Volcano, Batangas"
            text="One of the most iconic views in Luzon Mt Tall boasts a volcano inside a lake inside an island."
            img1={Mountain1}
            img2={Mountain2}
            />

            <DestinationData
            className="first-des-reverse"
            heading="Taal Volcano, Batangas"
            text="One of the most iconic views in Luzon Mt Tall boasts a volcano inside a lake inside an island."
            img1={Mountain3}
            img2={Mountain4}
            />
        </div>
    )
}

export default Destination;