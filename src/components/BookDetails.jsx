import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const navigate = useNavigate();
  const URI = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/books";

  useEffect(() => {
    axios
      .get(`${URI}/${id}`)
      .then((res) => setBook(res.data))
      .catch((error) => console.error("Error in fetching book", error));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${URI}/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  if (!book) return <div>Loading . . . . .</div>;

  return (
    <div className="rounded bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl font-bold">{book.title}</h2>
      <p className="text-gray-700">Author: {book.author}</p>
      <p className="text-gray-700">ISBN: {book.isbn}</p>
      <p className="text-gray-700">Genre: {book.genre}</p>
      <p className="text-gray-700">Tags: {book.tags.join(", ")}</p>
      <p className="text-gray-700">{book.description}</p>
      <div className="mt-4">
        <button
          onClick={() => navigate("/")}
          className="mr-2 rounded bg-green-500 p-2 text-white transition-colors hover:bg-green-600"
        >
          Go Home
        </button>
        <Link to={`/edit-book/${id}`}>
          <button className="mr-2 rounded bg-primary p-2 text-white transition-colors hover:bg-blue-600">
            Edit Book
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="rounded bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
        >
          Delete Book
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
