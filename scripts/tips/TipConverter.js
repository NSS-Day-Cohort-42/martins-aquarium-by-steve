export const TipAsHTML = (tipObject) => {
    return `
        <aside class="tip card">
            <div class="tip__text">${tipObject.text}</div>
        </aside>
    `
}
