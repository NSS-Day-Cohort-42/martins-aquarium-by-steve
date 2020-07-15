import { useLocations } from "./LocationProvider.js";
import { LocationAsHTML } from "./LocationConverter.js";

export const LocationList = () => {
    const contentElement = document.querySelector(".content--left")
    const locations = useLocations()

    let locationListHTML = ""

    for(const location of locations){
        locationListHTML += LocationAsHTML(location)
    }

    contentElement.innerHTML += `
        <article class="locations">
            ${locationListHTML}
        </article>
    `

}