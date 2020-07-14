export const QuoteAsHTML = (quoteObject) => {
    return `
        <section class="quote card">
            <div class="quote__author">${quoteObject.author}</div>
            <div class="quote__text">${quoteObject.text}</div>
        </section>
    `
}