import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
// import { useAuth } from "./Auth";

const SectionNavbar = () => {
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? "bold" : "normal",
  //     // fontWeight: isActive ? "bold" : "normal",

  //     // textDecoration: isActive ? "none" : "underline",
  //   };
  // };

  // const auth = useAuth;

  return (
    <nav className="primary_nav">
      <NavLink  className="navlinks" to="/">
        Video creaters
      </NavLink>
      <NavLink  className="navlinks" to="/artists">
        Artists
      </NavLink>
      <NavLink  className="navlinks" to="/writers">
        Writers
      </NavLink>
      <NavLink  className="navlinks" to="/musicians">
        Musicians
      </NavLink>
      <NavLink  className="navlinks" to="/developers">
        Developers
      </NavLink>
      <NavLink  className="navlinks" to="/gaming">
        Gaming
      </NavLink>
      <NavLink  className="navlinks" to="/community">
        Community
      </NavLink>
      {/* {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          Login
        </NavLink>
      )} */}
    </nav>
  );
};
export default SectionNavbar;
