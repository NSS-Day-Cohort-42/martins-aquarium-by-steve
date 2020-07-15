import { useTips } from "./TipProvider.js";
import { TipAsHTML } from "./TipConverter.js";

export const TipList = () => {
    //gets reference to element on the DOM
    const contentElement = document.querySelector(".content--right")
    const tips = useTips()
    let tipListHTML = ""

    for(const tip of tips){
        tipListHTML += TipAsHTML(tip)
    }

    contentElement.innerHTML = `
        <article class="tips">
            ${tipListHTML}
        </article>
    `
}