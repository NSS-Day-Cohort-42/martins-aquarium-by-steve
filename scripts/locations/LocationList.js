import { useLocations } from "./LocationProvider.js";
import { LocationAsHTML } from "./LocationConverter.js";

export const LocationList = () => {
    //gets reference to element on the DOM
    const contentElement = document.querySelector(".content--left")

    // collection of fish from FishDataProvider
    const locations = useLocations()

    let locationListHTML = ""

    for(const location of locations){
        locationListHTML += LocationAsHTML(location)
    }

    // updating HTML of DOM element with Fish List HTML
    contentElement.innerHTML += `
        <article class="locations">
            ${locationListHTML}
        </article>
    `

}