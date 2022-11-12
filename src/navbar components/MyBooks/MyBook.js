
import "./myBook.css";
import { useState } from "react";

const MyBook = () => {
  const [books, setBooks] = useState("")
  const[category, setCategory] = useState("")
  fetch("http://localhost:9292/shelves/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return setBooks(data.book_title),
    setCategory(data.book_category)
  })
  return (
    <div className="myBookPage">
      <h1>My Books</h1>
      <div className="selectedBooks">
        <h2>shelf</h2>
        <table className="books">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              {/* <th>UserName/</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{books}</td>
              <td>{category}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBook;