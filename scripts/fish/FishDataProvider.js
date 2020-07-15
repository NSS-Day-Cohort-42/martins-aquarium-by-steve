const fishCollection = [
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
        length: 25,
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
        length: 25,
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
        length: 25,
        location: "Great Barrier Reef",
        image: "./images/fish/nado.jpeg"
    }
]

export const useFish = () => {
    //.slice() allows you to return a copy of fishCollection
    return fishCollection.slice()
}

export const addFish = (fish) => {
    fishCollection.push(fish)
}