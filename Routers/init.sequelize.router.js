import express from "express";
import { sequelize  } from "../Config/db.sequelize.js";


const initRouter = express.Router();

import SongModel from '../Models/song.model.js'
import ArtistModel from '../Models/artist.model.js'


initRouter.get("/init", (req, res) => {
  try {
    sequelize.sync()
    res.sendStatus(200)

  }
  catch(err){
    res.send(err)
  }
});


export { initRouter };