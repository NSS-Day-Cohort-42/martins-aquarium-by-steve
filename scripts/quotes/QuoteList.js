import { useQuotes } from "./QuoteProvider.js";
import { QuoteAsHTML } from "./QuoteConverter.js";

export const QuoteList = () => {
    const contentElement = document.querySelector(".content--left")
    const quotes = useQuotes()

    let quoteListHTML = ""

    for(const quote of quotes){
        quoteListHTML += QuoteAsHTML(quote)
    }

    contentElement.innerHTML += `
        <article class="quotes">
            ${quoteListHTML}
        </article>
    `

}