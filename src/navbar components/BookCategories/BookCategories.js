import "./bookCategories.css";
import BookCard from "./BookCard";
import Dropdown from "./Dropdown";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AddBook from "./AddBook";

const urlBooks = "http://localhost:9292/books";
const urlBooksUniq = "http://localhost:9292/books";

const BookCategories = () => {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(urlBooks)
      .then((resp) => resp.json())
      .then((data) => {
        return setCategories(data);
      });
  }, []);
  const handleMenuAll = () => {
    fetch(urlBooks)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  };
  const handleScience = () => {
    fetch(`${urlBooksUniq}/Science`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  };

  const handleFiction = () => {
    fetch(`${urlBooksUniq}/Fiction`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        return setCategories(data);
      });
  };

  const handleRomantic = () => {
    fetch(`${urlBooksUniq}/Romantic`)
      .then((resp) => resp.json())
      .then((data) => {
        return setCategories(data);
      });
  };

  const handleSubmit = () => {
    const urlUsers = "http://localhost:9292/books ";
    const newData = { title, category };
    console.log(newData);
    fetch(urlUsers, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then(() => console.log("Book added to bookList"));
    setTitle("")
    setCategory("")
    // navigate("/BookCategories");
  };
  return (
    <>
      <div>
        <h1> To select Book click on a Category</h1>

        <Dropdown
          trigger={
            <button className="dropdown_btn booklist">Categories</button>
          }
          menu={[
            <button className="booklist" onClick={handleMenuAll}>
              All
            </button>,
            <button className="booklist" onClick={handleScience}>
              Science
            </button>,
            <button value="Science" onClick={handleFiction}>
              Fiction
            </button>,
            <button value="Fiction" onClick={handleRomantic}>
              Romantic
            </button>,
          ]}
        />
      </div>

      <div>
        <BookCard categories={categories} />
      </div>
      <div>
        <AddBook
          trigger={<button className="add_book_form">Add Book</button>}
          form={[
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <h2>Add another Book</h2>
              <label> Book Title:</label>
              <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
              <br />
              <label> Book Category:</label>
              <input
                type="text"
                placeholder="Enter Title"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <br />
              <button
                value="Fiction"
                onClick={(e) => handleSubmit()}
                className="add_btn"
              >
                Add
              </button>
              <br />
              <br />
            </form>,
          ]}
        />
      </div>
    </>
  );
};

export default BookCategories;
