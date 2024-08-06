import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import NotFound from "./components/NotFound";
import Borrowed from "./components/Borrowed";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-background text-text">
        <header className="bg-primary p-4 shadow-md">
          <div className="container px-4">
            <h1 className="font-main text-3xl text-secondary md:text-4xl">
              <Link to="/">Personal Library</Link>
            </h1>
          </div>
        </header>
        <main className="container mx-auto grow p-4 px-6 md:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book/:id" element={<EditBook />} />
            <Route path="/borrowed" element={<Borrowed />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="mt-4 bg-primary p-4 text-center">
          <p className="text-sm text-secondary md:text-base">
            © 2024 Personal Library. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
