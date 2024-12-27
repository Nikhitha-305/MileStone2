const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://pragathi:pragathi@cluster0.kta3x5c.mongodb.net/examDB"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error:", err));

// Routes
app.use("/api/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
