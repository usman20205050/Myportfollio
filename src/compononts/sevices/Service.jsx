import React from 'react'
import "./Service.css";
import simg from "../../assets/service.svg";
import webb from "../../assets/webb.svg";
import sweb from "../../assets/sweb.svg"
import sweb1 from "../../assets/sweb1.svg"
import sweb3 from "../../assets/sweb3.svg"
function Service() {
  return (
    <div className='smain' id="services">
        <div className='heading'>
        <img src={simg} alt="image not fount" />
      <h1 >Services And Solutions</h1>
      <img src={webb} alt="image not fount" />
        </div>
        <hr size={100} color='white'/>
      <div className="sgrid">
        <div className="box">
          <img src={sweb3} alt="imagenotfound" />
          <h1>Website Design</h1>
          <p> We provide responsive websites which are displayed properly on all screen sizes and in all the browsers. </p>
        </div>
        <div className="box">
        <img src={sweb1} alt="imagenotfound" />
          <h1>Web Development</h1>
         <p>Get your  Ecommerce, Media, Educational,  Marketing, Business and other websites from us.</p>
        </div>
        <div className="box">
        <img src={sweb} alt="imagenotfound" />
          <h1>Web  Maintenance</h1>
         <p>It’s so critical to how your site operates, with regular updates and changes with time. We are here to Maintain.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
