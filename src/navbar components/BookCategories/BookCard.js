import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BookCard = ({ categories }) => {
  const navigate = useNavigate();
  const [title, setBookTitle] = useState();
  const [category, setBookCategory] = useState();
  const [book_id, setBookId] = useState();
  const [user_id, setUserId] = useState();

  useEffect(() => {
    return () => {};
  }, []);
  const addBookToShelf = () => {
    console.log("working after click");
    // console.log(title, category, book_id, user_id);
    const shelfUrl = "http://localhost:9292/shelves";
    const newShelf = { title, category, book_id, user_id };

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
                  onClick={() => {
                    console.log(book.title);
                    console.log(book.category);
                    console.log(book.id);

                    // console.log("am working", title);
                    // console.log("test", category);
                    // console.log(book_id);
                    // console.log(2);

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
