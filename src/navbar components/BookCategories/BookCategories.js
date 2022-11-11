import "./bookCategories.css";
import * as React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

const urlBooks = "http://localhost:9292/books";

const BookCategories = () => {
  // const [categories, setCategories] = useState({});
  // useEffect(() => {
  
    function setCategories(data) {
      return data.map((key) => (
        console.log(key)
      ))
    }
  
  fetch(urlBooks)
    .then((resp) => resp.json())
    .then((data) =>
      // console.log(data)

      setCategories(data)
    );
  // })[categories];

  const handleMenuOne = () => {
    // fetch("http://localhost:9292/books/Science")
    fetch(urlBooks)
      .then((resp) => resp.json())
      .then(
        (data) => setCategories(data)
        // console.log(data)
      );
  };

  // const handleMenuTwo = () => {
  //   fetch(urlBooks)
  //     .then((resp) => resp.json())
  //     .then((data) =>
  //       // setCategories(data)
  //       console.log(data)
  //     );
  // };

  // const handleMenuThree = () => {
  //   fetch(urlBooks)
  //     .then((resp) => resp.json())
  //     .then(
  //       (data) =>
  //       // setCategories(data)
  //       console.log(data)
  //     );
  // };

  return (
    <>
      <div className="booklist">
        <h1> To select Book click on a Category</h1>

        <Dropdown
          trigger={<button className="dropdown_btn">Categories</button>}
          menu={[
            <button onClick={handleMenuOne}>Science</button>,
            <button
            // onClick={handleMenuTwo}
            >
              Fiction
            </button>,
            <button
            // onClick={handleMenuThree}
            >
              Romantic
            </button>,
          ]}
        />
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
            <tr>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
          {setCategories}
            {/* {categories.map((data) => (
              <tr key={data.id}>
                <td>{data.title}</td>
                <td>{data.category}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
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
