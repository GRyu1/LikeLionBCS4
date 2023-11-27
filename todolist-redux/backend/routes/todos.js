const express = require("express");

const router = express.Router();

let todoId = 1;
let todos = [{ id: 1, title: "🧹 청소하기", isDone: false }];

router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Not exist title.",
    });
  }

  todoId++;

  const newTodo = { id: todoId, title, isDone: false };

  todos.push(newTodo);

  console.log(todos);

  return res.json({ todo: newTodo });
});

router.get("/", (req, res) => {
  return res.json({ todos });
});

router.get("/:todoId", (req, res) => {
  const { todoId } = req.params;

  if (isNaN(todoId)) {
    return res.status(400).json({
      message: "todoId is not a number.",
    });
  }

  let existTodo;

  todos.map((v) => {
    if (v.id === +todoId) {
      existTodo = v;
    }
  });

  if (!existTodo) {
    return res.status(400).json({
      message: "Not exist todo.",
    });
  }

  return res.json({ todo: existTodo });
});

router.put("/:todoId/done", (req, res) => {
  const { todoId } = req.params;

  if (isNaN(todoId)) {
    return res.status(400).json({
      message: "todoId is not a number.",
    });
  }

  let updateTodo;

  todos = todos.map((v) => {
    if (v.id === +todoId) {
      updateTodo = { id: v.id, title: v.title, isDone: !v.isDone };

      return updateTodo;
    } else {
      return v;
    }
  });

  if (!updateTodo) {
    return res.status(400).json({
      message: "Not exist todo.",
    });
  }

  return res.json({ todo: updateTodo });
});

router.put("/:todoId", (req, res) => {
  const { todoId } = req.params;
  const { title } = req.body;

  if (isNaN(todoId) || !title) {
    return res.status(400).json({
      message: "Not exist data.",
    });
  }

  let updateTodo;

  todos = todos.map((v) => {
    if (v.id === +todoId) {
      updateTodo = { id: v.id, title, isDone: v.isDone };

      return updateTodo;
    } else {
      return v;
    }
  });

  console.log(todos);

  return res.json({ todo: updateTodo });
});

router.delete("/:todoId", (req, res) => {
  const { todoId } = req.params;

  if (isNaN(todoId)) {
    return res.status(400).json({
      message: "todoId is not a number.",
    });
  }

  todos = todos.filter((v) => {
    if (v.id !== +todoId) {
      return v;
    }
  });

  console.log(todos);

  return res.json({ message: "Deleted todo." });
});

module.exports = router;