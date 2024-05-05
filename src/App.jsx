import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontend from "./components/techfeilds/Frontend";
import Backend from "./components/techfeilds/Backend";
import DataAnalyst from "./components/techfeilds/DataAnalyst";
import CloudEngineering from "./components/techfeilds/CloudEngineering";
import Cybersecurity from "./components/techfeilds/Cybersecurity";
import UxDesigner from "./components/techfeilds/UxDesigner";
import HomePage from "./components/HomePage";

function App() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const burger = document.querySelector("#burger");
    const menu = document.querySelector("#menu");

    if (burger && menu) {
      burger.addEventListener("click", toggleMenu);
    }

    return () => {
      if (burger) {
        burger.removeEventListener("click", toggleMenu);
      }
    };
  }, [isMenuVisible]);

  return (
    <div>
      <nav className="p-5 sm:p-5 flex z-10 justify-between align-middle bg-blue-300  sticky top-0 ">
        <h1 className=" text-2xl font-bold">RunTech</h1>
        <div className="items-right px-4 cursor-pointer lg:hidden" id="burger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute right-2 top-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div
          className={`text-sm mt-3 ${isMenuVisible ? "" : "hidden"} lg:block`}
          id="menu"
        >
          <ul className=" grid grid-flow-row   sm:mt-0 lg:flex sm:gap-4 lg:justify-center lg:my-auto lg:mr-2">
            <li className="text-right mt-6 lg:mt-0">
              <NavLink to="/">home</NavLink>
            </li>
            <li className=" mt-1 lg:mt-0">
              <NavLink to="/comments">comments</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Frontend" element={<Frontend />} />
          <Route path="/Backend" element={<Backend />} />
          <Route path="/DataAnalyst" element={<DataAnalyst />} />
          <Route path="/CloudEngineering" element={<CloudEngineering />} />
          <Route path="/Cybersecurity" element={<Cybersecurity />} />
          <Route path="/UxDesigner" element={<UxDesigner />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
