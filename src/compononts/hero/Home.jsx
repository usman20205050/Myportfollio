import React from "react";
import homelogo from "../../assets/homebox.svg"
import Skill from "../about/Skill.jsx";
import Services from "../sevices/Service.jsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Home.css";
import Contact from "../contact/Contact.jsx";
import Eduction from "../eduction/Eduction.jsx";
import Projects from "../projects/Projects.jsx";
import Footer from "../footer/Footer.jsx"
function Home() {
  const handelcv=()=>{
    const pdfUrl = "../../../public/usmna.pk.pdf"
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }
  return (
    <div className="hero_Section"  >
      <div  className="hero_box" id="home" >
      <div className="left_Section">
        <div className="mainlogo">
          <h1 className="logo">
            Mani<span>Codes</span>
          </h1>
        </div>
        <h3 >
        Web Developer, Custom Websites
        </h3>
        <div className="btn">
          <a href="#contact" className="hover:bg-light m-2 bg-gradient-to-r from-dark to-light p-2 rounded" >Lets Talk</a>
          <button className="hover:bg-light m-2 bg-gradient-to-r from-dark to-light p-2  rounded" onClick={handelcv}>Download CV</button>
        </div> 
      </div>
      <div>
      <img className="topbarimg" src={homelogo} alt="svg not found" />
      </div>
      </div>
      <Skill/>
      <Services/>
      <Eduction/>
      <Contact/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default Home;
