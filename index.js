const express = require("express");

const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();
let count = 0;
event.on("countApi", () => {
  count++;
  console.log("Event Called !!! ", count);
});

app.get("/", (req, res) => {
  res.send("emitter");
  event.emit("countApi");
});

app.get("/search", (req, res) => {
  res.send("search !!! emitter");
});

app.get("/update", (req, res) => {
  res.send("update !!! emitter");
});

app.listen(4000);
