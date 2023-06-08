import db from "../Config/db.config.js";

class SongController {
  constructor() {
    console.log("Class SongController instantiated");
  }
  // list
  /* 	list = () => {
		console.log('Kører list metode');
		return true
	}
 */
	list = (req, res) => {
		// console.log(req.query);
		// let { sortkey } = req.query

		//sætter ternary operator

		// sortkey = sortkey ? sortkey :'id' 

		const sql = `SELECT s.id, s.title, a.name, a.id AS artist_id
						FROM song s 
						JOIN artist a 
						ON s.artist_id = a.id 
						ORDER BY a.name`
		db.query(sql, (err, result) => {
			if(err) {
				console.error(err)
			} else {
				res.json(result)
			}
		})
	}

  // details
/*   details = () => {
    console.log("Kører details metode");
    return true;
  }; */

	details = (req, res) => {
		const id = parseInt(req.params.id)
		const sql = `SELECT s.id, s.title, s.content, a.name 
						FROM song s 
						JOIN artist a 
						ON s.artist_id = a.id 
						WHERE s.id = ? 
						ORDER BY a.name`
		db.query(sql, [id], (err, result) => {
			if(err) {
				console.error(err)
			} else {
				res.json(result)
			}
		})
	}

  // create
/*   create = () => {
    console.log("Kører create metode");
    return true;
  }; */

	create = (req, res) => {
		const { title, content, artist_id } = req.body
		//console.log({title, content, artist_id});

		if(title && content && artist_id) {
			const sql = `
				INSERT INTO song(title, content, artist_id) 
				VALUES(?,?,?)				
			`
			db.query(sql, [title, content, artist_id], (err, result) => {
				if(err) {
					console.error(err)
				} else {
					res.json({new_id: result.insertId})
				}
			})
		}

	}
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
