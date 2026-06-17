const express = require("express");
const router = express.Router();
const timerTemplateCopy = require("../models/CreateTimerModel");

router.get("/timers", async (req, res) => {
  try {
    const timers = await timerTemplateCopy.find();
    res.json(timers);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/timer/:id", async (req, res) => {
  try {
    const timer = await timerTemplateCopy.findById(req.params.id);
    res.json(timer);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/create", (req, res) => {
  const createdTimer = new timerTemplateCopy({
    timerName: req.body.timerName,
    workTime: req.body.workTime,
    breakTime: req.body.breakTime,
    backgroundImage: req.body.backgroundImage,
    song: req.body.song,
  });
  createdTimer
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.put("/edit/:id", async (req, res) => {
  try {
    const editedTimer = await timerTemplateCopy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json(editedTimer);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await timerTemplateCopy.findByIdAndDelete(req.params.id);
    res.json({ message: "Timer Deleted", deleted });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
