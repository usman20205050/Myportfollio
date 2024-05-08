import React from "react";
import eduction from "../../assets/boy.svg";
import "./Eduction.css";
function Eduction() {
  return (
    <div id="eduction">
      <h1>Academic Expertise</h1>
      <div className="edu_section">
        <div className="eleft">
          <div id="box1" className="ebox">
            <h2>
              Matric.<span>2016-2017</span>
            </h2>
            <p>Computer Science</p>
            <p>Sir Syed Model School and Collage Haripur</p>
          </div>
          <div id="box2" className="ebox">
            <h2>
              Intermediate.<span>2017-2018.</span>
            </h2>
            <p>Computer Science.</p>
            <p>Sir Syed Model School and Collage Haripur.</p>
          </div>
          <div id="box3" className="ebox">
            <h2>
              Bachelor of IT.<span>2019-2023.</span>
            </h2>
            <p>Software Engineering.</p>
            <p>The University of Haripur.</p>
          </div>
        </div>
        <div className="eright">
          <img src={eduction} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Eduction;
