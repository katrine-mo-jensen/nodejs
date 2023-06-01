import express from "express";

const collectionRouter = express.Router();

collectionRouter.get("/products", (req, res) => {
  res.send("Hent alle posts");
});

collectionRouter.post("/products", (req, res) => {
  res.send("Opret alle posts");
});

collectionRouter.put("/products", (req, res) => {
  res.send("Opdate alle posts");
});

collectionRouter.delete("/products", (req, res) => {
  res.send("Slet alle posts");
});

export { collectionRouter };
