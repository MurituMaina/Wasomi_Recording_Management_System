import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BookCard = ({ categories }) => {
  const navigate = useNavigate();
  const [book_title, setBookTitle] = useState("");
  const [book_category, setBookCategory] = useState("");
  const [book_id, setBookId] = useState();
  const [user_id, setUserId] = useState("");

  useEffect(() => {
    return () => {};
  }, [book_title, book_category, book_id, user_id]);
  const addBookToShelf = (book) => {
    console.log("working before click");
    const shelfUrl = "http://localhost:9292/shelves";
    const newShelf = { book_title, book_category, book_id, user_id };

    console.log(newShelf);
    fetch(shelfUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newShelf),
    }).then(() => {
      console.log("Book added to shelf");
    });

    navigate("/MyBook");
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Read</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((book, index) => {
          return (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.category}</td>
              <td>
                <button
                  onClick={(e) => {
                    return (
                      setBookTitle(book.title),
                      setBookCategory(book.category),
                      setBookId(book.id),
                      setUserId(1),
                      addBookToShelf()
                    );
                  }}
                >
                  Read
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BookCard;
