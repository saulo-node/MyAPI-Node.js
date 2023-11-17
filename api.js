const http = require("http");
const port = 3000;

const apiJSON = [
    {"ID":"1", "player":"Rony","qnt":1},
    {"ID":"2", "player":"Richarlison", "qnt":5},
    {"ID":"3", "player":"Neymar", "qnt":1},
]

const api = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"application/json"})
    res.write("Here's the json:" + JSON.stringify(apiJSON))
    res.end();
})

api.listen(port, () => {console.log("Running...")})