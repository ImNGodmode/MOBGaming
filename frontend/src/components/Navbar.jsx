import React from 'react'
import { Link } from "react-router-dom"
import * as userService from "./../utilities/users-service";

function Navbar({ user }) {
  const handleLogOut = () => {
    // Call the logout function
    userService.logOut();

    // Set the user back to null
    setUser(null);
  };
  return (
    <nav>
      <Link to="/games">Store</Link>
      &nbsp; | &nbsp;
      <Link to="/games/new/:id">New Order</Link>
      <span style={{ paddingLeft: "10px" }}>
        Welcome {user.newUser?.name || user.currentUser?.name}
      </span>
      <Link
        to=""
        onClick={() => {
          return handleLogOut();
        }}
      >
        Log Out
      </Link>
    </nav>
  )
}

export default Navbar