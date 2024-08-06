## CodeFlow

1. Frontend and Backend Folders

   - Frontend - Vite React + Tailwind
   - Backend - Node JS (express, mongoose, cors) + (nodemon)

2. Backend

   1. Server.js

   - Imports
   - Initialize packages
   - Middleware
   - Mongoose (Database)
     - Object Schema
     - Book Model
     - Routes

3. FrontEnd

   1. App.jsx - set Up Routes
   2. Home.jsx
      - Books Array AND Search Variable (UseState)
      - GET books (UseEffect)
      - Filter Books (Filter Function)
      - SearchBar, sets filter value
      - List of Filtered Book
        - Each book is Linked to its BookDetails page using {`/book/${book._id}`}
   3. BookDetails.jsx
      - Set Id using useParams
      - Current Book array (UseState)
      - GET BOOK by ID
      - Display Details
   4. Addbook.jsx
      - Book with all its props (useState)
      - handleChangeFunction
      - handleSubmit - with added functionality for splitting tags
      - Make Form for Book
   5. EditBook.jsx
      - Same as AddBook.jsx
      - Handling by book id
   6. Borrowd.jsx
      - Books Array (useState)
      - GET Books (useEffect)
      - Filter Books (Filter Function x Availability === false)
      - Display Books
   7. NotFound.jsx
