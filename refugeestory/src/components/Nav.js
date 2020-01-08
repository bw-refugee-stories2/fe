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
        <NavLink  href="/">Home</NavLink>
        <NavLink  href = "/login">Admin Login</NavLink>
        <NavLink  href = "/signup">Admin Sign Up</NavLink>
        <NavLink  href = "/storiesreview">Stories to Review</NavLink>
        <NavLink  href = "/submit">Submit Your Story</NavLink>
      </Navbar>
  );
};

export default NavBar;
