const quotes = [
    {
        author: "Maimonides",
        text: "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime."
    },
    {
        author: "Mark Twain",
        text: "When you fish for love, bait with your heart, not your brain."
    },
    {
        author: "Oliver Wendell Holmes, Sr.",
        text: "Memory is a net: one finds it full of fish when he takes it from the brook, but a dozen miles of water have run through it without sticking."
    }
]

export const useQuotes = () => {
    return quotes.slice()
}
