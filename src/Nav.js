import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/course">ManageCoursePage</Link>
      </li>
      <li>
        <Link to="/aboutus">About Us</Link>
      </li>
    </ul>
  );
}

export default Nav;
