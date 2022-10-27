import '../App.css';
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import Store from "../pages/Store";
import Navbar from "./Navbar";
import { getUser } from "../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  
  console.log(user)
  

  return (
    <div className="App">
       {user ? (
        <>
          <Navbar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/games/cart" element={<CartPage />} />
            <Route path="/games" element={<Store />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
