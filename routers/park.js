const express = require("express");
const { Router } = express;
const router = new Router();
const Park = require("../models").park;
const Review = require("../models").review;
const authMiddleware = require("../auth/middleware");
const review = require("../models/review");

router.post("/", authMiddleware, async (req, res) => {
  const userLogged = req.user.dataValues;
  const { title, description, image, country, type } = req.body;

  if (!title || !image || !description || !country || !type) {
    return res.status(400).send("Please fill out all the fields");
  }

  try {
    const newPark = await Park.create({
      title,
      description,
      image,
      country,
      type,
      userId: userLogged.id,
    });

    res.status(201).json(newPark);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/", async (req, res, next) => {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
  try {
    const parks = await Park.findAndCountAll({
      limit,
      offset,
      include: [{model: Review}],
      order: [[Review, "createdAt", "DESC"]]
    });
    res.status(201).json(parks);
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/:parkId/reviews", async (req, res, next) => {
  const { parkId } = req.params;

  try {
    const getReviewByParkId = await Review.findAll({
      where: { parkId },
    });
    res.status(201).json(getReviewByParkId);
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});
//temp leave auth middleware out
router.get("/:parkId/report", async (req, res, next) => {
  const { parkId } = req.params;

  try {
    const reportPark = await Park.increment('reports', { where: { id: parkId } });

    const reportedPark = await Park.findByPk(parkId)
    if (reportedPark.reports >= 10) {
      await reportedPark.update({ hidden: true });
    }

    res.status(201).json(reportPark);


  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
})

module.exports = router;
