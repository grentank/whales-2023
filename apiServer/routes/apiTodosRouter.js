const express = require("express");
const { Todo } = require("../db/models");

const apiTodosRouter = express.Router();

apiTodosRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const Todos = await Todo.findAll({
        order: [["createdAt", "DESC"]],
      });
      return res.json(Todos);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      if (!req.body?.title)
        return res.status(500).json({ message: "Empty reqbody" });
      const { title, body } = req.body;
      const newTodo = await Todo.create({
        title,
        body,
        done: false,
      });
      return res.json(newTodo);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

apiTodosRouter.delete("/:id", async (req, res) => {
  await Todo.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});
apiTodosRouter.get("/:id", async (req, res) => {
  const todo = await Todo.findOne({ where: { id: req.params.id } });
  res.json(todo);
});

apiTodosRouter.post("/:id/toggle", async (req, res) => {
  const targetTodo = await Todo.findOne({
    where: { id: req.params.id },
  });
  targetTodo.done = !targetTodo.done;
  await targetTodo.save();
  res.json(targetTodo);
});

// apiTodosRouter.put("/:id", async (req, res) => {
//   const targetTodo = await Todo.findOne({
//     where: { id: req.params.id },
//   });
//   const { title, body } = req.body;
//   targetTodo.title = title;
//   targetTodo.body = body;
//   await targetTodo.save();
//   res.json(targetTodo);
// });

module.exports = apiTodosRouter;
