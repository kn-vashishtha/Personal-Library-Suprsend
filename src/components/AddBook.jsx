import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    genre: "",
    tags: "",
    description: "",
  });

  const navigate = useNavigate();
  const URI = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/books";

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.title) {
      alert("Title is required!");
      return;
    }
    axios
      .post(`${URI}`, {
        ...book,
        tags: book.tags.split(","),
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error("Error adding book", error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg rounded bg-white p-4 shadow-md"
    >
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={book.title}
          required
          onChange={handleChange}
          className="w-full rounded border border-secondary p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">Author</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          className="w-full rounded border border-secondary p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">ISBN</label>
        <input
          type="text"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          className="w-full rounded border border-secondary p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">Genre</label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          className="w-full rounded border border-secondary p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">Tags</label>
        <input
          type="text"
          name="tags"
          value={book.tags}
          onChange={handleChange}
          className="w-full rounded border border-secondary p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">Description</label>
        <textarea
          name="description"
          value={book.description}
          onChange={handleChange}
          className="w-full rounded border border-secondary p-2"
        />
      </div>
      <button
        onClick={() => navigate("/")}
        className="mr-2 rounded bg-green-500 p-2 text-white transition-colors hover:bg-green-600"
      >
        Go Home
      </button>
      <button
        type="submit"
        className="rounded bg-primary p-2 text-white transition-colors hover:bg-blue-600"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
