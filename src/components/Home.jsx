import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const URI = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/books";

  useEffect(() => {
    console.log("Backend URI: ", URI); // Add this line for debugging
    axios
      .get(`${URI}`)
      .then((res) => setBooks(res.data))
      .catch((error) => console.error("Error fetching Data", error));
  }, []);

  useEffect(() => {
    axios
      .get(`${URI}`)
      .then((res) => setBooks(res.data))
      .catch((error) => console.error("Error fetching Data", error));
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-4">
      <div className="mb-4 flex flex-col items-center justify-between gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow rounded border border-secondary p-2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => navigate("/borrowed")}
            className="rounded bg-primary p-2 text-white transition-colors hover:bg-blue-600"
          >
            Borrowed
          </button>
          <button
            onClick={() => navigate("/add-book")}
            className="rounded bg-primary p-2 text-white transition-colors hover:bg-blue-600"
          >
            Add Book
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default Home;
