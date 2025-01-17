const express = require("express");
const app = express();

app.use(express.json());

app.get("/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.json({ result: parseFloat(a) + parseFloat(b) });
});

app.get("/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.json({ result: parseFloat(a) - parseFloat(b) });
});

app.get("/multiply/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.json({ result: parseFloat(a) * parseFloat(b) });
});

app.get("/divide/:a/:b", (req, res) => {
    const { a, b } = req.params;
    if (parseFloat(b) === 0) {
        return res.status(400).json({ error: "Division by zero" });
    }
    res.json({ result: parseFloat(a) / parseFloat(b) });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
