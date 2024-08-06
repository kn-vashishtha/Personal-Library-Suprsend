import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    genre: "",
    tags: "",
    description: "",
    availability: true,
  });

  const navigate = useNavigate();
  const URI = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/books";

  useEffect(() => {
    axios
      .get(`${URI}/${id}`)
      .then((res) => setBook(res.data))
      .catch((error) => console.error("Error fetching data", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: name === "availability" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${URI}/${id}`, book)
      .then(() => {
        navigate(`/book/${id}`);
      })
      .catch((error) => console.error("Error updating book", error));
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
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">Availability</label>
        <select
          name="availability"
          value={book.availability}
          onChange={handleChange}
          className="w-full rounded border border-secondary p-2"
        >
          <option value={true}>Available</option>
          <option value={false}>Borrowed</option>
        </select>
      </div>
      <button
        onClick={() => navigate(`/book/${id}`)}
        className="mr-2 rounded bg-green-500 p-2 text-white transition-colors hover:bg-green-600"
      >
        Go Back
      </button>
      <button
        type="submit"
        className="rounded bg-primary p-2 text-white transition-colors hover:bg-blue-600"
      >
        Update Book
      </button>
    </form>
  );
};

export default EditBook;
