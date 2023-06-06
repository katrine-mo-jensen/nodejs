import express from "express";

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  console.log(req.query);
  res.send("Hent alle posts");
});

postRouter.post("/", (req, res) => {
  res.send(`${req.body.firstname} ${req.body.lastname}
  ${req.body.email}
  ${req.body.birthday}
  ${req.body.password}
  ${req.body.job}
  ${req.body.address}
  
  
  
  `);
});

postRouter.put("/", (req, res) => {
  res.send("Opdate post");
});

postRouter.delete("/", (req, res) => {
  res.send("Sletter post");
});

export { postRouter };
