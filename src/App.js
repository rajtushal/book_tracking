import { useContext, useEffect } from "react";
import BookList from "./Components/BookList";
import CreateBook from "./Components/CreateBook";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <BookList />
      <CreateBook />
    </div>
  );
}

export default App;
