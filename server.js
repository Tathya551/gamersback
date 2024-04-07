const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());

app.use(express.json());

const dbURI =
  "mongodb+srv://tathya551:Tathya%235501@cluster0.bbknps1.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const taskRoutes = require("./routes/task.routes");

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Gamersback Task Manager API!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
