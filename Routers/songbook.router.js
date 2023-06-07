import express from "express";
import SongController from "../Controllers/song.controller.js";

const songbookRouter = express.Router();

const song = new SongController();

songbookRouter.get("/songbook", (req, res) => {
  return song.list(req, res)
});

songbookRouter.get("/songbook/:id([0-9]*)", (req, res) => {
  return song.details(req, res)
});

songbookRouter.post("/songbook", (req, res) => {
  return song.create(req, res)
});

songbookRouter.put("/songbook", (req, res) => {
  res.send('Opdater sang')
});

songbookRouter.delete("/songbook", (req, res) => {
  res.send('Sletter sang')
});

export { songbookRouter };
