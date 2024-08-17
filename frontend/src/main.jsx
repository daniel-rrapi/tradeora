import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Item from "./pages/Item";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="itm" element={<Item />}></Route>
        <Route path="search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
