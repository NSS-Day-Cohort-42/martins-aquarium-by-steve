const fishCollection = [
    {
        name: "Dory",
        food: "Plankton",
        species: "Blue Tang",
        length: 3,
        location: "Great Barrier Reef",
        image: "./images/fish/bluetang.jpeg"
    },
    {
        name: "Nemo",
        food: "Plankton, Algae",
        species: "Clown Fish",
        length: 6,
        location: "Great Barrier Reef",
        image: "./images/fish/clownfish.jpeg"
    },
    {
        name: "Bruce",
        food: "Fish, Tires",
        species: "Great White Shark",
        length: 26,
        location: "Great Barrier Reef",
        image: "./images/fish/nado.jpeg"
    },
    {
        name: "Dory",
        food: "Plankton",
        species: "Blue Tang",
        length: 4,
        location: "Great Barrier Reef",
        image: "./images/fish/bluetang.jpeg"
    },
    {
        name: "Nemo",
        food: "Plankton, Algae",
        species: "Clown Fish",
        length: 5,
        location: "Great Barrier Reef",
        image: "./images/fish/clownfish.jpeg"
    },
    {
        name: "Bruce",
        food: "Fish, Tires",
        species: "Great White Shark",
        length: 27,
        location: "Great Barrier Reef",
        image: "./images/fish/nado.jpeg"
    },
    {
        name: "Dory",
        food: "Plankton",
        species: "Blue Tang",
        length: 9,
        location: "Great Barrier Reef",
        image: "./images/fish/bluetang.jpeg"
    },
    {
        name: "Nemo",
        food: "Plankton, Algae",
        species: "Clown Fish",
        length: 5,
        location: "Great Barrier Reef",
        image: "./images/fish/clownfish.jpeg"
    },
    {
        name: "Bruce",
        food: "Fish, Tires",
        species: "Great White Shark",
        length: 15,
        location: "Great Barrier Reef",
        image: "./images/fish/nado.jpeg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const theFish of fishCollection) {
        if (theFish.length % 3 === 0) {
            holyFish.push(theFish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const theFish of fishCollection) {
        // Is divisible by 5 but not divisible by 3.
        if (theFish.length % 5 === 0 && theFish.length % 3 !== 0) {
            soldiers.push(theFish)
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const theFish of fishCollection) {
        // Not divisible by 5 and not divisible by 3
        if (theFish.length % 5 !== 0 && theFish.length % 3 !== 0) {
            regularFish.push(theFish)
        }
    }

    return regularFish
}
