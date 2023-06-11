import SongModel from '../Models/artist.model.js'

const model = new SongModel();

class ArtistController {
    constructor(){
        console.log("Class ArtistController instantiated")
    }

    list = async (req, res) => {
        const result = await model.list(req, res) 
        res.json(result)
    }
}

export default ArtistController