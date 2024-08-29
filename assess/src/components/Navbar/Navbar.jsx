import "./Navbar.css";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo.png";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux'; // Import useSelector

export default function Navbar1() {
  const [nav, setNav] = useState(false);

  // Access totalQuantity from the Redux store
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    setNav(scrollValue > 100);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className='logo'>
              <img src={logo} alt="" className="img-fluid" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/resturent">Restaurant</Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <BsCart4 size={30} className="me-lg-4" />
                  <em className='roundpoint'>{totalQuantity}</em> {/* Display totalQuantity */}
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
