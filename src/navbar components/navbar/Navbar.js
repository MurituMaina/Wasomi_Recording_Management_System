import "./navbar.css";
import Home from "../home/Home";
import MyBook from "../MyBooks/MyBook";
import BookCategories from "../BookCategories/BookCategories";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "../signup/Signup";

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div>
          <Link to="/">HOME</Link>
          <Link to="/bookCategories">BOOK CATEGORIES</Link>

          <Link to="/myBook">MY BOOKS</Link>
          <Link to="/signUp">SIGN UP</Link>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/myBook" element={<MyBook />} />
        <Route path="/bookCategories" element={<BookCategories />} />
        <Route path="/signUp" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
