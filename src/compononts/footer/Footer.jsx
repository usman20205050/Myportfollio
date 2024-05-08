import React from 'react'
import "./Footer.css";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
function Footer() {
  return (
    <div id='footer' className='footer'>
        <div id="fleft">
        <h1 className='text-light'>Mani<span className='text-dark'>Codes</span></h1>
        </div>
        {/* center */}
        <div >
          Created by Manicode
        </div>
        <div id="fright">
        <div className="fsociallinks">
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
        </div>
    </div>
  )
}

export default Footer
