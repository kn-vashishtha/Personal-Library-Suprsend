import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 py-28 md:py-40">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-red-500">404</h1>
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="mb-4 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="rounded bg-primary p-3 text-white transition-colors hover:bg-blue-600"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
