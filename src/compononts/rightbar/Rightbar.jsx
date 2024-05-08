import React from "react";
import { useState } from "react";
import "./Rightbar.css";
import { IoHome } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import AnchorLink from "react-anchor-link-smooth-scroll";

const linklist = [
  { linkname: "Home", path: "/", scrollerid: "#home" },
  { linkname: "Skills", path: "/", scrollerid: "#skills" },
  { linkname: "Services", path: "/", scrollerid: "#services" },
  { linkname: "My Projects", path: "/", scrollerid: "#projects" },
  { linkname: "Education", path: "/", scrollerid: "#education" },
];

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="link_list">
        <div>
          <a href="#home" offset={100}>
            <div className="flex items-center hover:bg-dark flex-col width-full p-2 rounded active:bg-mycolor">
              <IoHome />
              <p>Home</p>
            </div>
          </a>
        </div>
        <div>
        <a href="#skills" offset={100}>
            <div className="flex items-center flex-col width-full p-2 rounded hover:bg-dark">
            <GiSkills />
              <p>About</p>
            </div>
          </a>
        </div>
        <div>
        <a href="#services" offset={100}>
            <div className="flex items-center flex-col width-full p-2 rounded hover:bg-dark">
            <MdOutlineMiscellaneousServices />
              <p>Services</p>
            </div>
          </a>
        </div>
        <div>
        <a href="#eduction" offset={100}>
            <div className="flex items-center flex-col width-full p-2 rounded hover:bg-dark ">
            <IoSchoolSharp />
              <p>Eduction</p>
            </div>
          </a>
        </div>
        <div>
        <a href="#contact" offset={100}>
            <div className="flex items-center flex-col width-full p-2 rounded hover:bg-dark">
            <IoIosContact />
              <p>Contact</p>
            </div>
          </a>
        </div>
        <div>
        <a href="#projects" offset={100}>
            <div className="flex items-center flex-col width-full p-2 rounded hover:bg-dark">
            <GrProjects />
              <p>Projects</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
