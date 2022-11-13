import React from "react";
import { useState } from "react";


const AddBook = (trigger, form) => {

  const [open, setOpen] = useState(false);

 const handleOpen = () => {
   setOpen(!open);
 };

  return (
    <>
      <div className=" dropdown">
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? (
          <ul className="bookAdd">
            {form.map((formItem, index) => (
              <li className="menu-item">
                {React.cloneElement(formItem, {
                  onClick: () => {
                    bookAdd.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default AddBook;
