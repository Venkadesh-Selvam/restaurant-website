import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaStarAndCrescent } from "react-icons/fa6";
import "../App.css";
import { NavDropdown } from "react-bootstrap";

const categoryArray = [
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];

function Header() {
  const navigate = useNavigate();

  const handleChange = (selectedCategory) => {
    navigate(`/category/${selectedCategory}`);
  };

  return (
    <div>
      <Navbar expand="lg" className="fixed-top bg-body-secondary shadow">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="navbar-brand text-dark fw-bold text-uppercase"
            >
              {" "}
              <FaStarAndCrescent style={{ color: "purple" }} /> Selva
              <span style={{ color: "purple" }}>Nila</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center d-flex gap-5  w-100 text-success">
              <NavLink
                to="/"
                className="navLink active text-success  text-decoration-none py-2 text-uppercase"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="navLink text-success text-decoration-none py-2 text-uppercase"
              >
                About Us
              </NavLink>
              <NavDropdown
                title={<span className="menuNavLink text-success ">Menu</span>}
                to="/home"
                className="menuDropdown  text-uppercase text-decoration-none"
              >
                <div className="scrollMenu">
                  {categoryArray.map((item) => (
                    <NavDropdown.Item
                      key={item}
                      onClick={() => handleChange(item)}
                      className="navItemLink text-success"
                    >
                      {item}
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>
              <NavLink
                to="/campaigns"
                className="navLink text-success text-uppercase text-decoration-none py-2"
              >
                Campaigns
              </NavLink>
              <NavLink
                to="/contact"
                className="navLink text-success text-decoration-none py-2 text-uppercase"
              >
                Connect Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
