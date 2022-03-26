const express = require("express");
const path = require('path');
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));
var db;
app.get("/", function (request, response) {
    db = JSON.parse(fs.readFileSync(`bd.json`, "utf8"))
    response.sendFile(__dirname + "/index15.html");
});
app.post("/data", function (request, response) {

    if (request.body.message != "") {
        db = JSON.parse(fs.readFileSync(`bd.json`, "utf8"))
        db.message.push(request.body.message)
        fs.writeFileSync(`bd.json`, JSON.stringify(db), () => { });
        console.log(db);
    }
    response.status(200);
    response.setHeader('Content-Type', /json/);
    response.send(JSON.stringify(db));

});
app.post("/video", function (request, response) {


    db = JSON.parse(fs.readFileSync(`bd.json`, "utf8"))
    db.video.push(request.body)
    // fs.writeFileSync(`bd.json`, JSON.stringify(db), () => { });
    // console.log(db);
    console.log(request.body);
    
    response.status(200);
    response.send(request.body);
});

/*"dev": "nodemon server.js",*/
//   node server.js
app.listen(3000, "192.168.0.193", () => { console.log("Сервер запущений"); });
module.exports.app = app;