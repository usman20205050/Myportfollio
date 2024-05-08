import React,{useState}from "react";
import "./Sidebar.css";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

//linklist array is for navbar linklist which where loop in our compononts;
function Sidebar() {

  return (
    <div className="sidebar">
      {/* below is the profile */}
      <div className="profile">
        <img src="Usmanimage.jpeg" alt="img" />
        <h1>Usman Javed.</h1>
        <h3>Front End Developer.</h3>
        <div className="sociallinks">
          <a href="https://www.linkedin.com/in/usman-javed-12b351281/" target="_blank">
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
      {/* there is a about section  */}
      <h1 className="text-xl font-bold mt-3 p-1 rounded">About Me</h1>
      <div className="myinfo">
        <div className="myinfoitems">
          <h4 className="bg-gradient-to-r from-dark to-light   p-1 rounded mt-1">Age:</h4>
          <h4 className="p-1 ">23 Year.</h4>
        </div>
        <div className="myinfoitems">
          <h4 className="bg-gradient-to-r from-dark to-light  p-1 rounded mt-1">Based At</h4>
          <h4 className="p-1 ">Islamabad.</h4>
        </div>
        {/* <div className="myinfoitems">
          <h4 className="bg-gradient-to-r from-dark to-light   p-1 rounded mt-1">Email</h4>
          <h4 className="p-1 ">usmanjaved20205050@gmail.com</h4>
        </div> */}
       
        <hr size={100} color="black" />
      </div>

    {/* this is a languages section  */}
      <h1 className="text-xl font-bold mt-3 p-1 rounded">Languages</h1>
      <div className="myinfo">
        <div className="myinfoitems">
          <h4 className="bg-gradient-to-r from-dark to-light   p-1 rounded mt-1">Urdu:</h4>
          <h4 className="p-1 ">Native.</h4>
        </div>
        
        <div className="myinfoitems">
          <h4 className="bg-gradient-to-r from-dark to-light  p-1 rounded mt-1">English:</h4>
          <h4 className="p-1">InterMediate.</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
