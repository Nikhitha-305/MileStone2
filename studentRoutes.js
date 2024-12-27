const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// Add a student
router.post("/add", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send("Student added successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all students, sorted by score and with rank
router.get("/all", async (req, res) => {
  try {
    const students = await Student.find().sort({ score: -1 }); // Sort by score (desc)

    // Assign ranks based on the sorted order
    students.forEach((student, index) => {
      student.rank = index + 1; // Rank starts from 1
    });

    // Send the result
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Search for a student by ID
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ studentID: req.params.id });
    if (!student) return res.status(404).send("Student not found");
    res.json(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a student by ID
router.put("/update/:id", async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { studentID: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!student) return res.status(404).send("Student not found");
    res.send("Student updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a student by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({
      studentID: req.params.id,
    });
    if (!student) return res.status(404).send("Student not found");
    res.send("Student deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
