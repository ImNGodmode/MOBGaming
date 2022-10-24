import '../App.css';
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import NewOrderPage from "../pages/NewOrderPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import Navbar from "./Navbar";
import { getUser } from "../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  console.log(user)
  return (
    <div className="App">
       {user ? (
        <>
          <Navbar user={user} />
          <Routes>
            <Route path="/orders/new/:id" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
