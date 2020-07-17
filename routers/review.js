const express = require("express");
const { Router } = express;
const router = new Router();
const Review = require("../models").review;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

router.post("/", authMiddleware, async (req, res) => {
  const userLogged = req.user.dataValues;
  const { name, stars, description, parkId, imageUrl } = req.body;

  if (!name || !stars || !description) {
    return res.status(400).send("Please fill out all the fields");
  } else if (!parkId) {
    return res.status(400).send("Something went wrong, sorry");
  }

  try {
    const newReview = await Review.create({
      name,
      stars,
      description,
      userId: userLogged.id,
      parkId,
      imageUrl,
      userName: userLogged.name,
    });

    const reviews = await Review.findAll({
      include: [User],
    });
    res.status(201).json(newReview);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      include: [User],
    });
    res.status(201).json(reviews);
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.patch("/", authMiddleware, async (req, res, next) => {
  const { id } = req.body;
  try {
    const toUpdate = await Review.findByPk(id);
    console.log(toUpdate);
    if (!toUpdate) {
      res.status(404).send("Review not found");
    } else {
      const updated = await toUpdate.update(req.body);
      res.json(updated);
    }
  } catch (error) { }
});

module.exports = router;
