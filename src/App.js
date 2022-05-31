import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Explore,
  Home,
  Profile,
  Bookmark,
  SignIn,
  SignUp,
} from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
