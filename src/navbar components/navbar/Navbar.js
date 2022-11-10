import "./navbar.css";
import Home from "../home/Home";
import MyBook from "../MyBooks/MyBook";
import BookCategories from "../BookCategories/BookCategories";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Signup from "../signup/Signup";
import SignupPage from "../signup/SignupPage";

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div>
          <Link to="/">HOME</Link>
          <Link to="/BookCategories">BOOK CATEGORIES</Link>
          <Link to="/myBook">MY BOOKS</Link>
          <Link to="/signuppage">SIGN UP</Link>
          

        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/myBook" element={<MyBook />} />
        <Route path="/BookCategories" element={<BookCategories />} />
        <Route path="/signuppage" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
