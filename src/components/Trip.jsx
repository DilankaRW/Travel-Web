import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../images/cover.jpg"
import Trip2 from "../images/cover1.jpg"
import Trip3 from "../images/cover2.jpg"
import Trip4 from "../images/cover3.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans."
                />

<TripData
                image={Trip2}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans."
                />

<TripData
                image={Trip3}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans."
                />
            </div>
        </div>
    )
}

export default Trip;