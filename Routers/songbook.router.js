import express from "express";
import SongController from "../Controllers/song.controller.js";

const songbookRouter = express.Router();

const song = new SongController();

songbookRouter.get("/songbook", (req, res) => {
  console.log(song.list());
});

songbookRouter.get("/songbook/:id([0-9]*)", (req, res) => {
  console.log(song.details());
});
songbookRouter.post("/songbook", (req, res) => {
  console.log(song.create());
});
songbookRouter.put("/songbook", (req, res) => {
  console.log(song.update());
});
songbookRouter.delete("/songbook", (req, res) => {
  console.log(song.delete());
});

export { songbookRouter };
