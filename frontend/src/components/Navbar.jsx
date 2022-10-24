import React from 'react'
import { Link } from "react-router-dom"

function Navbar({ user }) {
  const logOut = () => {
    localStorage.removeItem("data");
  }
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new/:id">New Order</Link>
      <span style={{ paddingLeft: "10px" }}>Welcome {user.newUser.name}</span>
      <div onClick={logOut}>Log Out</div>
    </nav>
  )
}

export default Navbar