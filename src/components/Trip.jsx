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
                heading="Bentota Beach"
                text="If you’re looking for the most relaxing places in Sri Lanka, this beach lies at a distance of 65 km from the city of Colombo is the beautiful beach named Bentota. It is one of the most beautiful beaches in Sri Lanka and a must-visit spot on your trip there.

Unwind and relax on the golden sand of the Bentota beach and enjoy the beautiful sea views. One can also enjoy a boat cruise on the Bentota river and those who are looking for some adventure can enjoy some exciting water activities at the Bentota beach. Don’t forget to explore the best places to visit in Bentota while wandering here!"
                />

                <TripData
                image={Trip_image2}
                heading="Nine Arch Bridge"
                text="Demodara Nine Arch Bridge in Ella This is one of the iconic and famous places in Sri Lanka which is known for being surrounded by lush-greenery and panoramic views. Located at a small mountain town of Ella, the Nine Arch Bridge was built in the early days of the railway expansion in Sri Lanka. The unique thing about the bridge is that it is made of sheer cement, stone and brick, without the use of any steel. The most beautiful view which the visitors can admire is the train rolling over the bridge while they make their move towards the Demodara Loop."
                />

                <TripData
                image={Trip_image3}
                heading="Dambulla Cave Temple"
                text="It is hard to not be stunned by the beautiful murals and statues in this beautifully preserved cave with over 150 statues of Buddha. The Dambulla cave temple is one of the finest temples in Sri Lanka which is known for its unique architecture. Experience the peace and silene in this stunning cave temple that bear testimony to the extraordinary cultural artifacts in ancient Sri Lanka."
                />
            </div>
        </div>
    )
}

export default Trip;