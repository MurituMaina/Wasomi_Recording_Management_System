import "./signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import { useState } from "react";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlUsers = "http://localhost:9292/users ";
    const newData = { name,email };
    console.log(newData);
    fetch(urlUsers, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then(() => console.log("person added to bookList"));

    // 👇️ redirect to /BookCategories
    navigate("/BookCategories");
    alert("Thank you for signing up.")
  };

  return (
    <div>
      <div className="bookingForm">
        <div>
          <h1> Register to Access books</h1>
        </div>
        <h2>Sign Up</h2>
        <div className="color-overlay d-flex justify-content-center algin-item-center">
          <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name: </Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <br />
            {/* contacts input */}
            {/* submit button */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
