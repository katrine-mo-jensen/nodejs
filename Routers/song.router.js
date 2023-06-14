import express from "express";
// import SongController from '../Controllers/song.controller.js'
import SongController from "../Controllers/song.controller.sequelizer.js";

const songRouter = express.Router();

const song = new SongController();

songRouter.get("/song", (req, res) => {
  return song.list(req, res);
});

songRouter.get("/song/:id([0-9]*)", (req, res) => {
  return song.details(req, res);
});

songRouter.post("/song", (req, res) => {
  return song.create(req, res);
});

songRouter.put("/song", (req, res) => {
  return song.update(req, res);
});

songRouter.delete('/song/:id([0-9]*)', (req, res) => {
  return song.delete(req, res)
})

export { songRouter };
