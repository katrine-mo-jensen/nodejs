class SongController {
  constructor() {
    console.log("Class SongController instantiated");
  }

  list = (req, res) => {
    const id = req.params.id;
    const sql = `
		SELECT s.id, s.title, s.content, a.name, s.create 
		FROM song s 
		JOIN artist a 
		ON s.artist_id = a.id 
		ORDER BY a.name
		`;
    db.query(sql, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.json(result);
      }
    });
  };

  /* 	list = () => {
		console.log('Kører list metode');
		return true
	}
 */
  details = () => {
    console.log("Kører details metode");
    return true;
  };

  // create
  create = () => {
    console.log("Kører create metode");
    return true;
  };
  // update
  update = () => {
    console.log("Kører update metode");
    return true;
  };

  // delete
  delete = () => {
    console.log("Kører delete metode");
    return true;
  };
}

export default SongController;
