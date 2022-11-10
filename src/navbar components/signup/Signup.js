import "./signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Signup() {
  return (
    <div className="bookingForm">
      <h2>Sign Up</h2>
      <div className="color-overlay d-flex justify-content-center algin-item-center">
        <Form
          className="rounded p-4 p-sm-3"
          // onSubmit={handleSubmit}
        >
          {/* name input */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              //   value={names}
              //   onChange={(e) => setName(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          {/* location input */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Location"
              //  value={location}
              // onChange={(e) => setLocation(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          {/* contacts input */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contacts</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contacts"
              // value={contacts}
              // onChange={(e) => setContacts(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          {/* submit button */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Signup;

// import "./signup.css";

// const Signup = () => {
//   return (
//        <div className="container">
//       <div className="col-md-6 col-md-offset-3">
//         <h2 className="text-center">Sign Up</h2>

//         <form>
//           <input name="email" type="text" label="Email" />
//           <br />
//           <input name="password" type="password" label="Password" />
//           <br />
//           <input
//             name="passwordConfirmation"
//             type="password"
//             label="Password Confirmation"
//           />
//           <br />

//           <button action="submit" className="btn btn-primary">
//             Sign up
//           </button>
//         </form>
//       </div>
//       <br />
//     </div>
//   );
// };

// export default Signup;
