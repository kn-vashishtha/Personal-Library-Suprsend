// Imports
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Initialize
const PORT = process.env.PORT || 3000;
const app = express();
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/library";

// Middleware
app.use(express.json());
app.use(cors());

// Mongoose
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connect to mongo Database"))
  .catch((error) => console.error("Error connecting to mongo Database", error));

// Object Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  genre: String,
  tags: [String],
  description: String,
  availability: { type: Boolean, default: true },
});

// Book model
const Book = mongoose.model("Book", bookSchema);

// CRUD
app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post("/books", async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json(newBook);
});

app.get("/books/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});

app.put("/books/:id", async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedBook);
});

app.delete("/books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID format");
    }

    await Book.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting book", error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on Port - ${PORT}`);
});
