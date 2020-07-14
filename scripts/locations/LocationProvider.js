const locations = [
    {
        name: "Great Barrier Reef",
        description: "Plankton",
        url: "Blue Tang",
        image: "./images/locations/barrier-reef.jpeg"
    },
    {
        name: "Pacific Ocean",
        description: "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean in the south and is bounded by the continents of Asia and Australia in the west and the Americas in the east.",
        url: "Clown Fish",
        image: "./images/locations/pacific.jpeg"
    },
    {
        name: "Caribbean Ocean",
        description: "The Caribbean is a region of the Americas that consists of the Caribbean Sea, its islands and the surrounding coasts. The region is southeast of the Gulf of Mexico and the North American mainland, east of Central America, and north of South America.",
        url: "Great White Shark",
        image: "./images/locations/caribbean.jpeg"
    }
]

export const useLocations = () => {
    return locations.slice()
}
