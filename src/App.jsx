import { useState } from "react";
import Sidebar from "./compononts/Navbar/Sidebar.jsx";
import { IoMdArrowDropdown } from "react-icons/io";
import Home from "./compononts/hero/Home.jsx";
import "./App.css";
import Topbar from "./compononts/TopbarMobile/Topbar.jsx";
import Rightbar from "./compononts/rightbar/Rightbar.jsx";

function App() {
  const [dark, setdark] =useState(true);
const handelbg= ()=>{
  setdark(!dark);
  console.log(dark);
}
  return (
    <div className={dark ? "mainpage" :"lightmainpage"}>
      {
        dark ? <button className="darkbtn" onClick={handelbg}>Creative</button>:
        <button className="lightbtn" onClick={handelbg}>Dark</button>
      }
      <div className="desktop">
        <Sidebar />
      </div>
      <div className="navbar" id="navbar">
        <Rightbar />
      </div>
      <div className="topbar">
        <Topbar value={dark}/>
      </div>
      <div>
        <Home />
      </div>
      <div className="rightbar" id="rightbar">
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
