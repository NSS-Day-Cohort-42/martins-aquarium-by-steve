import { useTips } from "./TipProvider.js";
import { TipAsHTML } from "./TipConverter.js";

export const TipList = () => {
    //gets reference to element on the DOM
    const contentElement = document.querySelector(".content--right")

    // collection of fish from FishDataProvider
    const tips = useTips()

    let tipListHTML = ""

    for(const quote of tips){
        tipListHTML += TipAsHTML(quote)
    }

    // updating HTML of DOM element with Fish List HTML
    contentElement.innerHTML += `
        <article class="tips">
            ${tipListHTML}
        </article>
    `

}