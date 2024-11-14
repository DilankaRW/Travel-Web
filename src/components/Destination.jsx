import image1 from "../images/Normal.jpg"
import image2 from "../images/arugam_bay.jpg"
import image3 from "../images/sinharaja.jpg"
import image4 from "../images/bambarakanda_falls.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
            className="first-des"
            heading="Adventurous Spirit"
            text="Bitten by the travel bug and in search of new and unique experiences? Sri Lanka was once called Serendipity – ‘the place of accidental happenings’ due to the adventure that constantly lurked around the corner. With Jetwing Travels you can travel by foot in search of mystical waterfalls, trail through the jungles of Butulla, go diving near ship wrecks and coral reefs and cycle through the coastal towns in search of the hidden treasures of Sri Lanka."
            img1={image1}
            img2={image2}
            />

            <DestinationData
            className="first-des-reverse"
            heading="Romantic Serendipity"
            text="Imagine a tour designed simply to help you rekindle the love or ensure that and your other half can enjoy a honeymoon with all the comfort and solitude you desire. With Love Songs of Ceylon a romantic rendezvous from the Negombo beaches to Hatton tea plantations will undoubtedly set the mood. Sri Lankan Rendezvous will give you the time and space that you need for each other amidst the hills of Kandy, the mist of Nuwara Eliya and the soft sands of Bentota."
            img1={image3}
            img2={image4}
            />
        </div>
    )
}

export default Destination;