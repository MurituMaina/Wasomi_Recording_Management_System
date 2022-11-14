import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BookCard = ({ book }) => {
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

  function handleDeleteBook() {
    const booksUrl = `http://localhost:9292/book/${book_id}`;
    
     fetch(booksUrl, {
       method: "DELETE",
       headers: { "Content-Type": "application/json" }
     }).then(() => {
       console.log("Book added to shelf");
     });

  }

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
        {book.map((book, index) => {
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
              <td>
                <button
                  className="delete"
                  onClick={() => {
                    setBookId(book.id);
                    console.log(book_id);
                    handleDeleteBook();
                  }}
                >
                  Delete
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
