import express from "express";

const postRouter = express.Router();

postRouter.get("/posts", (req, res) => {
  res.send("Hent alle posts");
});

postRouter.post("/posts", (req, res) => {
  res.send("Opret ny post");
  console.log(req.body);
});

postRouter.put("/posts", (req, res) => {
  res.send("Opdate post");
});

postRouter.delete("/posts", (req, res) => {
  res.send("Sletter post");
});

export { postRouter };
