import { useState, useContext } from "react";
import EditBook from "./EditBook";
import BooksContext from "../context/books";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookbyId } = useContext(BooksContext);

  const handleDelete = () => {
    console.log(book.id);
    deleteBookbyId(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };
  return (
    <div
      style={{
        width: "400px",
        margin: "auto",
        border: "1px solid",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {!showEdit ? (
        <span>{book.title}</span>
      ) : (
        <EditBook book={book} onSubmit={handleSubmit} />
      )}
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}

export default BookShow;
