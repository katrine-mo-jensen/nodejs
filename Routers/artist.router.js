import express from "express";
import ArtistController from "../Controllers/artist.controller.js";

const artistRouter = express.Router();

const artist = new ArtistController();

artistRouter.get('/artist', (req, res) => {
    res.json(1234)
})




export { artistRouter };