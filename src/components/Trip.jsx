import "./TripStyles.css";
import TripData from "./TripData";
import Trip_image1 from "../images/bentot_beach.jpg"
import Trip_image2 from "../images/nine_arch_bridge.jpg"
import Trip_image3 from "../images/Regular.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip_image1}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans."
                />

                <TripData
                image={Trip_image2}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans."
                />

                <TripData
                image={Trip_image3}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans."
                />
            </div>
        </div>
    )
}

export default Trip;