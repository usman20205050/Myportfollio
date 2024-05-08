import React from 'react';
import "./Projects.css";
const project = [
    {
        name:"Ecommerse Store",
        discripation:"React redux Project",
        imgaddresse:"ecommerse.png",
        githuburl:"#",
        projecturl:"#"
    },
    {
        name:"Todo Apps",
        discripation:"React redux Project",
        imgaddresse:"ecommerse.png",
        githuburl:"https://github.com/usman20205050/React-projects/tree/main/02UserRedux",
        projecturl:"#"
    }
]
function Projects() {
  return (
    <div className='pmain' id="projects">
     <h1> Checkout My Web Projects</h1>
    <div className='pgrid'>
        {
            project.map((pro, index)=>(
                <div key={index} className="pbox">
                    <img className='pboximg' src={pro.imgaddresse} alt="img not founds" />
                    <div>{pro.discripation}</div>
                    <div className='codelinks'>
                    <div ><a  href={pro.githuburl} target='_blank'>Code</a></div>
                    <div ><a href={pro.githuburl} target='_blank'>live</a></div>
                    </div>
                </div> 
            ))
        }
    </div >
    </div>
  )
}

export default Projects
