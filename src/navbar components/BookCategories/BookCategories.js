import "./bookCategories.css";
import BookCard from "./BookCard";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";

const urlBooks = "http://localhost:9292/books";
const urlBooksUniq = "http://localhost:9292/books/all";

const BookCategories = () => {
  const [categories, setCategories] = useState([]);
  // const [books, setBooks] = useState([]);
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
      .then((data) =>
        // setCategories(data)
        console.log(data)
      );
  };

  const handleRomantic = () => {
    fetch(`${urlBooks}/Romantic`)
      .then((resp) => resp.json())
      .then(
        (data) =>
        // setCategories(data)
        console.log(data)
      );
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
            </button>,<br />,
            <button className="booklist" onClick={handleScience}>
              Science
            </button>,<br />,
            <button value="Science" onClick={handleFiction}>
              Fiction
            </button>,<br />,
            <button value="Fiction" onClick={handleRomantic}>
              Romantic
            </button>,
          ]}
        />
      </div>

      <div>
        {categories.forEach((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
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
