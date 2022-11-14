import React from "react";
const AddBook = ({ trigger, form }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
 return (
   <div className="add_book_form">
     {React.cloneElement(trigger, {
       onClick: handleOpen,
     })}
     {open ? (
       <div className="form">
         {form.map((formItem, index) => (
           <div key={index} className="form-item">
             {React.cloneElement(formItem, {
               onClick: () => {
                 formItem.props.onClick();
                 setOpen(false);
               },
             })}
           </div>
         ))}
       </div>
     ) : null}
   </div>
 );

};
export default AddBook;

 