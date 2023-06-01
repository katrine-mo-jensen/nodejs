import express from "express";

const postRouter = express.Router();

postRouter.get("/posts", (req, res) => {
  res.send("Hent alle posts");
});

postRouter.post("/posts", (req, res) => {
  res.send(`${req.body.firstname} ${req.body.lastname}
  ${req.body.email}
  ${req.body.birthday}
  ${req.body.password}
  ${req.body.job}
  ${req.body.address}
  
  
  
  `);
});

postRouter.put("/posts", (req, res) => {
  res.send("Opdate post");
});

postRouter.delete("/posts", (req, res) => {
  res.send("Sletter post");
});

export { postRouter };
