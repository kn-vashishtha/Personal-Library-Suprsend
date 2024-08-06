import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Borrowed = () => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();
  const URI = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/books";

  useEffect(() => {
    axios
      .get(`${URI}`)
      .then((res) => setBooks(res.data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const filteredBooks = books.filter((book) => book.availability === false);

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="mb-4 rounded bg-green-500 p-2 text-white transition-colors hover:bg-green-600"
      >
        Go Home
      </button>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => (
          <li
            key={book._id}
            className="rounded border border-secondary bg-white p-4 shadow-md"
          >
            <Link
              to={`/book/${book._id}`}
              className="text-lg font-bold text-primary hover:text-blue-600"
            >
              {book.title}
            </Link>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-500">Genre: {book.genre}</p>
            <p className="text-gray-500">Tags: {book.tags.join(", ")}</p>
            <p className="text-gray-500">
              Status: {book.availability ? "Available" : "Borrowed"}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Borrowed;
