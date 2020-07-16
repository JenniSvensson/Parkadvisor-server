const express = require("express");
const { Router } = express;
const router = new Router();
const User = require("../models").user;
const Likes = require("../models").like;
const authMiddleware = require("../auth/middleware");

router.get("/", async (req, res, next) => {
  try {
    const getLikes = await Likes.findAll();

    res.status(201).json(getLikes);
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/add", authMiddleware, async (req, res, next) => {
  const userLogged = req.user.dataValues;
  const { parkId } = req.body;
  try {
    const newLike = await Likes.create({
      userId: userLogged.id,
      parkId,
    });
    res.status(201).json(newLike);
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.delete("/remove/:likeId", authMiddleware, async (req, res, next) => {
  const likeId = parseInt(req.params.likeId);
  try {
    const toDelete = await Likes.findByPk(likeId);
    if (!toDelete) {
      res.status(404).send("Like not found");
    } else {
      const likeDeleted = await toDelete.destroy();
      console.log("DELETED", likeDeleted);
      res.status(201).json(likeDeleted);
    }
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
