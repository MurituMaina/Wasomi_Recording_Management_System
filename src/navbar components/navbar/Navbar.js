import "./navbar.css"
import Home from "../home/Home";
import MyBook from "../MyBooks/MyBook";
import BookCategories from "../BookCategories/BookCategories";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

const Navbar = () =>{

    

    return(
        // <h1></h1>
        <Router>

<nav className="navbar">
            <div>
                <Link to="/home">HOME</Link>
                <Link to="/myBook">MY BOOKS</Link>
                <Link to="/bookCategories">BOOK CATEGORIES</Link>
            </div>
        </nav>

              <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/myBook" element={<MyBook />} />
          <Route path="/bookCategories" element={<BookCategories />} />
        </Routes>
        </Router>


     );



        
    
        

}

export default Navbar