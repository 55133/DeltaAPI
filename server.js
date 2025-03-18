const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allows Roblox to access API
app.use(express.json());

const responses = {
    "hunt": [
        "Ooh, hunt?! Hunt where?! I love the thrill of the chase!",
        "The hunt is on! My instincts are razor sharp!"
    ],
    "fight": [
        "Fight?! Yes! The thrill of battle fuels me!",
        "A battle? Finally! I've been itching for a good fight!"
    ]
};

// API Endpoint to get a random response
app.get("/response", (req, res) => {
    const keyword = req.query.keyword?.toLowerCase();
    if (responses[keyword]) {
        const randomResponse = responses[keyword][Math.floor(Math.random() * responses[keyword].length)];
        res.json({ response: randomResponse });
    } else {
        res.json({ response: "Huh? I don't get it..." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
