import express from "express";
import { postRouter } from "./Routers/post.router.js";
import { router as initRouter } from "./Routers/init.seqelize.router.js";
import { collectionRouter } from "./Routers/collection.router.js";
import dotenv from "dotenv";
import db from "./Config/db.config.js";

db.query("SELECT title, name FROM song, artist", (err, result) => {
  console.log(result);
});

dotenv.config();

// app.use(initRouter);
// app.use(SongRouter);

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hej verden!");
});

app.get("/about", (req, res) => {
  res.send("Læs mere om min Node.js app!");
});

app.use("/posts", postRouter);
app.use(collectionRouter);

app.use((req, res, next) => {
  res.status(404).send("Siden blev ikke fundet");
});

app.listen(process.env.PORT, () => {
  console.log(`Server kører på http://localhost:${process.env.PORT}`);
});

