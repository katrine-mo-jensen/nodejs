import express from "express";
import { postRouter } from "./Routers/post.router.js";
import { collectionRouter } from "./Routers/collection.router.js";
import { songRouter } from "./Routers/song.router.js";
import { artistRouter } from "./Routers/artist.router.js";
import { initRouter } from "./Routers/init.sequelize.router.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hej verden!");
});

app.get("/about", (req, res) => {
  res.send("Læs mere om min Node.js app!");
});

app.use("/posts", postRouter);
app.use("/products", collectionRouter);
app.use(songRouter);
app.use(artistRouter);
app.use(initRouter);

app.use((req, res, next) => {
  res.status(404).send("Siden blev ikke fundet fuck");
});

app.listen(process.env.PORT, () => {
  console.log(`Server kører på http://localhost:${process.env.PORT}`);
});
