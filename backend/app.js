const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const taskRoutes = require("./routes/tasks");
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("🔥 Pomodoro Timer API Running");
});

module.exports = app;
