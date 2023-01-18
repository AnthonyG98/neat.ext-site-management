const express = require("express");
const router = express.Router();
const { Tasks } = require("../models");

router.post("/", async (req, res) => {
  const { title, task_url, description, completed, UserId } = req.body;
  const task = Tasks.create({
    title: title,
    task_url: task_url,
    description: description,
    completed: completed,
    UserId: UserId,
  });
  res.json("task posted");
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const allTasks = Tasks.findAll({ where: { UserId: id } });

  res.json(allTasks);
});
module.exports = router;
