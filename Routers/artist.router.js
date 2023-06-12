import express from "express";
import ArtistController from "../Controllers/artist.controller.js";

const artistRouter = express.Router();

const artist = new ArtistController();

artistRouter.get("/artist", (req, res) => {
  console.log("Liste: Kalder /song med GET");
});

artistRouter.get("/artist/:id([0-9]*", (req, res) => {
  console.log("Detajler: Kalder /song med GET");
});

artistRouter.post("/artist", (req, res) => {
  console.log("Opret: Kalder /song med POST");
});

export { artistRouter };
