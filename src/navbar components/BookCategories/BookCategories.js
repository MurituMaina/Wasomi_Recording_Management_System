import "./bookCategories.css";
import BookCard from "./BookCard";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddBook from "./AddBook";
import { Navigate } from "react-router";

const urlBooks = "http://localhost:9292/books";

const BookCategories = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [title, setTitle] = useState();
  useEffect(() => {
    fetch(urlBooks)
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  const handleMenuAll = () => {
    fetch(urlBooks)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        data.map((data) => {
          // console.log(data.title);
          // return setBooks(data.title);
          return setCategories(data);
        });
      });
  };
  const handleScience = () => {
    fetch(`${urlBooks}/Science`)
      .then((resp) => resp.json())
      .then((data) =>
        // setCategories(data)
        console.log(data)
      );
  };

  const handleFiction = () => {
    fetch(`${urlBooks}/Fiction`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        return setCategories(data);
      });
  };

  const handleRomantic = () => {
    fetch(`${urlBooks}/Romantic`)
      .then((resp) => resp.json())
      .then((data) =>
        // setCategories(data)
        console.log(data)
      );
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
    setTitle("");
    setCategory("");
    Navigate("/BookCategories");
  };
  return (
    <>
      <div className="booklist">
        <h1> To select Book click on a Category</h1>

        <Dropdown
          trigger={<button className="dropdown_btn">Categories</button>}
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
        <BookCard books={categories} />
      </div>
      <div>
        <AddBook
          trigger={<button className="add_book_form addBook">Add Book</button>}
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

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default BookCategories;
