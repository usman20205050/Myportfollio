import React from "react";
import { useState } from "react";
import "./Topbar.css";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
function Topbar(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const handeltopbtn = () => {
    setOpenMenu(!openMenu);
  };
  const dark = props.value;

  return (
    <div className="maintopprofile">
      {openMenu ? (
        <div className="mobilemenu">
        <div className="darktopbtn" onClick={handeltopbtn}>
          <MdOutlineCancel />
          </div>
          <div className="topbarnavlinks">
        <div>
          <a href="#home" offset={100}>
            <div className="flex items-center p-2 rounded  hover:bg-dark">
              <IoHome />
              <p>Home</p>
            </div>
          </a>
        </div>
        <div>
        <a href="#skills" offset={100}>
            <div className="flex items-center p-2 rounded  hover:bg-dark">
            <GiSkills />
              <p>About</p>
            </div>
          </a>
        </div>
        <div>
        <a href="#services" offset={100}>
            <div className="flex items-center p-2 rounded  hover:bg-dark">
            <MdOutlineMiscellaneousServices />
              <p>Services</p>
            </div>
          </a>
        </div>
        <div>
        <a href="#eduction" offset={100}>
            <div className="flex items-center p-2 rounded  hover:bg-dark">
            <IoSchoolSharp />
              <p>Eduction</p>
            </div>
          </a>
        </div>
        <div>
        <a href="#contact" offset={100}>
            <div className="flex items-center p-2 rounded  hover:bg-dark">
            <IoIosContact />
              <p>Contact</p>
            </div>
          </a>
        </div>
        <div>
        <a href="#projects" offset={100}>
            <div className="flex items-center p-2 rounded  hover:bg-dark">
            <GrProjects />
              <p>Projects</p>
            </div>
          </a>
        </div>
      </div>
                
              
          </div>
      ) : (
        <div className={dark ?"darktopbtn":"lighttopbtn"} onClick={handeltopbtn}>
          <TiThMenu />
         
        </div>
      )}
      <div className={dark? "topprofile": "lighttopprofile"}>
        <img src="Usmanimage.jpeg" alt="img" />
        <h1>Usman Javed.</h1>
        <h3>Front End Developer.</h3>
        <div className="sociallinks">
          <a
            href="https://www.linkedin.com/in/usman-javed-12b351281/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/usman20205050" target="_blank">
            <FaSquareGithub />
          </a>
          <a href="#" target="_blank">
            <FaFacebookSquare />
          </a>
        </div>
        <hr size=" 100" color="black" />
      </div>
    </div>
  );
}

export default Topbar;
