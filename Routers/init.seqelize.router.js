import express from "express";
import { sequelize } from '../Config/db.sequelize.js'

const router = express.Router();
/*Modeler der skal med i initialiseringen*/
import SongModel from '../models/song.model.js'
import ArtistModel from '../models/artist.model.js'


/*Init router*/
router.get( '/init', (req, res) =>{ 
  try {
    sequelize.sync()
    res.sendStatus(200)
  }
  catch(err) {
    res.send(err)
  }
  
  })

/*Song Routes End*/

export { router };