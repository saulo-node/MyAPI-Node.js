const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/soma", (req, res) => {
    const n1 = parseInt(req.query.n1, 10) || 2;
    const n2 = parseInt(req.query.n2, 10) || 2;

    const soma = n1 + n2;
    res.send(`O resultado da soma é ${soma}`);
});

app.listen(3333, () => {
    console.log("Server open on port 3333");
});
