import React from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = () => {
  return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Refugee Stories</NavbarBrand>
        <NavLink className="navLink" href="/">Home</NavLink>
        <NavLink className="navLink" href = "/login">Admin Login</NavLink>
        <NavLink className="navLink" href = "/signup">Admin Sign Up</NavLink>
        <NavLink className="navLink" href = "/storiesreview">Stories to Review</NavLink>
        <NavLink className="navLink" href = "/submit">Submit Your Story</NavLink>
      </Navbar>
  );
};

export default NavBar;
