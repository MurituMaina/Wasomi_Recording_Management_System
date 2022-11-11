
import "./myBook.css";
// import { useState } from "react";
const MyBook = () => {
// const [books, setBooks] = useState({})
// fetch() => {}
  return (
    <div className="myBookPage">
      <h1>My Books</h1>
      <div className="selectedBooks">
        <h2>shelf</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBook;
