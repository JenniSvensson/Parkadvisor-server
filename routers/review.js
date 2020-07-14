const express = require("express");
const { Router } = express;
const router = new Router();
const Review = require("../models").review;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

router.post("/", authMiddleware, async (req, res) => {
  const userLogged = req.user.dataValues;
  const { name, stars, description, parkId } = req.body;

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
    });

    const reviews = await Review.findAll({
      include: [User],
    });
    res.status(201).json(reviews);
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

module.exports = router;
