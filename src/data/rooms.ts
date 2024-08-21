import { image } from "@config/constant/image";


export const rooms = [
    {
        id: 1,
        roomImage: image?.delux,
        name: "Deluxe Room",
        description: "Our Deluxe rooms are a seamless amalgamation of Tibetan art and modern comfort.",
        features: [
            "Air Condition",
            "Phone Call",
            "TV",
            "Free Wi-Fi",
        ],
        readMore: "/rooms/deluxe"
    },
    {
        id: 2,
        roomImage: image?.executive,
        name: "Executive Room",
        description: "Our Executive rooms are fit for all, whether you are a business traveler or a wanderer at heart.",
        features: [
            "Air Condition",
            "Alarm Clock",
            "Free Wi-Fi",
            "Magazine",
        ],
        readMore: "/rooms/executive"
    },
    {
        id: 3,
        roomImage: image?.gampoSuit,
        name: "Songtsan Gampo Suit",
        description: "The suite celebrates the ancient grandeur of Tibet with a stylish, modern twist.",
        features: [
            "Drinks",
            "Desk",
            "Jacuzzi",
            "Mini Bar",
        ],
        readMore: "/rooms/songtsan-gampo"
    },
    {
        id: 4,
        roomImage: image?.bhrikutiSuit,
        name: "Bhrikuti Suite",
        description: "Inspired by Princess Bhrikuti, the suite features the best of Newa culture, masterfully fused with contemporary amenities.",
        features: [
            "Jacuzzi",
            "Living Room",
            "Sewing Kit",
            "Microwave",
        ],
        readMore: "/rooms/bhrikuti-suite"
    },
    {
        id: 5,
        roomImage: image?.wenchengSuit,
        name: "Wencheng Suite",
        description: "A tribute to the legendary Princess Wencheng, the suite captures the essence of ancient Tibetan and Chinese royalty.",
        features: [
            "Drinks",
            "Desk",
            "Jacuzzi",
            "Free Wi-Fi",
        ],
        readMore: "/rooms/wencheng-suite"
    },
]


