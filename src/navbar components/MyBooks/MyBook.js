import "./myBook.css";
import { useEffect, useState } from "react";

const MyBook = () => {
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState();
  useEffect(() => {
    fetch("http://localhost:9292/shelves")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        return setBooks(data);
      });
  },[]);
  function deleteBooks(book) {
    console.log(bookId)
    fetch(`http://localhost:9292/shelves/${bookId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div className="myBookPage">
      <h1>My Books</h1>
      <div className="selectedBooks">
        <h2>Shelf - Current Reading List</h2>
        <table className="books">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Delete Book</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.book_title}</td>
                  <td>{book.book_category}</td>
                  <td>
                    <button onClick={e => {
                      return (setBookId(book.id),
                      deleteBooks())}} className="delete_book">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBook;
