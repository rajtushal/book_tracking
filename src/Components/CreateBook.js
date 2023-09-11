import React, { useState, useContext } from "react";
import BooksContext from "../context/books";

function CreateBook() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      return alert("enter valid name");
    }
    createBook(title);
    setTitle("");
  };

  return (
    <div style={{ width: "400px", margin: "auto", marginTop: "1rem" }}>
      <form onSubmit={handleSubmit}>
        <label style={{ marginRight: "7px" }}>title</label>
        <input type="text" value={title} onChange={handleChange} />
        <button style={{ marginLeft: "auto" }} type="submit">
          Create!
        </button>
      </form>
    </div>
  );
}

export default CreateBook;
