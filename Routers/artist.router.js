import express from "express";
import ArtistController from "../Controllers/artist.controller.js";

const artistRouter = express.Router();

const artist = new ArtistController();

artistRouter.get("/artist", (req, res) => {
  artist.list(req, res);
});

export { artistRouter };
