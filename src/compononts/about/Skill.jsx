import React from "react";
import Secondimg from "../../assets/secondlogos.svg";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaWordpressSimple } from "react-icons/fa";
import "./Skill.css";
function Skill() {
  return (
    <div id="skills">
      <h3>About My Skills</h3>
      <div className="insideabout">
        <div className="right">
          <div className="rightone">
            <p>
              I Have Experince with front-end technologies such as HTML, CSS,
              JavaScript, and frameworks like React.js. I'm also proficient in
              responsive design, CSS,and also interested in achieving front-end
              functionalities in project.
            </p>
          </div>
          <div className="headings">
            <h2 className="text-xl text-center">Skills</h2>
            <hr size={100} color="white" />
          </div>
          <div className="righttwo">
            <div className="sleft">
              <div className="myskills">
                <h1 className="skillslogo">
                  <IoLogoHtml5 />
                </h1>
                <h1>HTML.</h1>
              </div>
              <div className="myskills">
                <h1 className="skillslogo">
                <IoLogoCss3 />
                </h1>
                <h1>CSS.</h1>
              </div>
              <div className="myskills">
                <h1 className="skillslogo">
                <IoLogoJavascript />
                </h1>
                <h1>JavaScript.</h1>
              </div>
              <div className="myskills">
                <h1 className="skillslogo">
                <FaReact />
                </h1>
                <h1>Reactjs.</h1>
              </div>
            </div>
            <div className="sright">
              <div className="myskills">
                <h1 className="skillslogo">
                <FaNodeJs />
                </h1>
                <h1>Node js.</h1>
              </div>
              <div className="myskills">
                <h1 className="skillslogo">
                <SiExpress />
                </h1>
                <h1>Express.</h1>
              </div>
              <div className="myskills">
                <h1 className="skillslogo">
                <DiMongodb />
                </h1>
                <h1>Mongodb.</h1>
              </div>
              <div className="myskills">
                <h1 className="skillslogo">
                <FaWordpressSimple />
                </h1>
                <h1>Wordpress.</h1>
              </div>
            </div>
          </div>
          <hr size={100} color="white" />
          <div>
          <p>  Note: Node Express and Mongodb is Just for Custom APIs and Simple
            HTML Rendering.Wordpress is not my Major.</p>
          </div>
        </div>
        <div className="left">
          <img src={Secondimg} alt="img not load" />
        </div>
       
      </div>
     
    </div>
  );
}

export default Skill;
