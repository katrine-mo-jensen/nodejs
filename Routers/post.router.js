import express from "express";

const postRouter = express.Router();

postRouter.get("/posts", (req, res) => {
  res.send("Hent alle posts");
});


postRouter.post("/posts", (req, res) => {
  res.send("Opret alle posts");
});

postRouter.put("/posts", (req, res) => {
  res.send("Opdate alle posts");
});

postRouter.delete("/posts", (req, res) => {
  res.send("Slet alle posts");
});

export { postRouter };
