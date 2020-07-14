import { useQuotes } from "./QuoteProvider.js";
import { QuoteAsHTML } from "./QuoteConverter.js";

export const QuoteList = () => {
    //gets reference to element on the DOM
    const contentElement = document.querySelector(".content--left")

    // collection of fish from FishDataProvider
    const quotes = useQuotes()

    let quoteListHTML = ""

    for(const quote of quotes){
        quoteListHTML += QuoteAsHTML(quote)
    }

    // updating HTML of DOM element with Fish List HTML
    contentElement.innerHTML += `
        <article class="quotes">
            ${quoteListHTML}
        </article>
    `

}