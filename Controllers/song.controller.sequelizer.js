import SongModel from "../Models/song.model.js";

class SongController {
  constructor() {}
  list = async (req, res) => {
    const result = await SongModel.findAll({
      limit: 3,
      order: ['title']
    });
    res.json(result);
  };
}

export default SongController;
