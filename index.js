import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hej verden!");
});

app.get("/about", (req, res) => {
  res.send("Læs mere om min Node.js app!");
});

app.use((req, res, next) => {
  res.status(404).send("Siden blev ikke fundet");
});

app.listen(4242, () => {
  console.log("Server kører på http://localhost:4242/");
});
