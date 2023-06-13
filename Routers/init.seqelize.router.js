import express from "express";

const router = express.Router();

/*Song Routes Begin*/
router.get( '/init', (req, res) =>{ res.json(1234)} )

/*Song Routes End*/

export { router };