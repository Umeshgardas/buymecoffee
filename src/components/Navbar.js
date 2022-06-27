import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
// import { useAuth } from "./Auth";

const Navbar = () => {
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? "bold" : "normal",
  //     // fontWeight: isActive ? "bold" : "normal",

  //     // textDecoration: isActive ? "none" : "underline",
  //   };
  // };

  // const auth = useAuth;

  return (
 <div className="container">
     <nav className="primary_nav">
      <NavLink  className="navlinkss" to="/">
        Video creaters
      </NavLink>
      <NavLink  className="navlinkss" to="/artists">
        Artists
      </NavLink>
      <NavLink  className="navlinkss" to="/writers">
        Writers
      </NavLink>
      <NavLink  className="navlinkss" to="/musicians">
        Musicians
      </NavLink>
      <NavLink  className="navlinkss" to="/developers">
        Developers
      </NavLink>
      <NavLink  className="navlinkss" to="/gaming">
        Gaming
      </NavLink>
      <NavLink  className="navlinkss" to="/community">
        Community
      </NavLink>
      <NavLink  className="navlinkss" to="/freelancers">
        Freelancers
      </NavLink>
      {/* {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          Login
        </NavLink>
      )} */}
    </nav>
 </div>
  );
};
export default Navbar;

