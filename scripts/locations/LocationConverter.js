export const LocationAsHTML = (locationObject) => {
    return `
        <section class="location card">
            <div><img  class="location__image image--card" src="${locationObject.image}" /></div>
            <div class="location__name">${locationObject.name}</div>
            <div class="location__url">${locationObject.url}</div>
            <div class="location__description">${locationObject.description}</div>
        </section>
    `
}