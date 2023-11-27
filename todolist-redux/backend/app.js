const express = require("express");
const todosRouter = require("./routes/todos");
const cors = require("cors")

const app = express();

const port = 3010;

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use("/todos", todosRouter);

app.get("/", (req, res) => {
  return res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`🚀 Server is listening on port : ${port}`);
});