import React from 'react';
import aboutimage from '../assets/images/about2.jpg';
import aboutimage2 from '../assets/images/about3.jpg';
import RSC from "react-scrollbars-custom";

export const AboutArea = ({menu}) => {
    return (
        <section className={menu ? "area-inner area-started active": "area-inner area-started active paddingAdjust"} >
        <RSC style={{ height: "100vh" }}>
                   <div className="about">
                      <div className="container">
                         <div className="about-wrapper">
                            <div className="row">
                               <div className="col-sm-12 col-md-12 col-lg-12">
                                  <div className="title-pt go-center">
                                     <h2>About Me</h2>
                                     <h6>Front End & WordPress Web Developer, UI/UX Designer</h6>
                                  </div>
                               </div>
                            </div>
                            <div className="row">
                               <div className="col-sm-12 col-md-12 col-lg-6">
                                  <div className="about-left ">
                                     <h4 className="title-inside">How I can help?</h4>
                                     <p className="first-para">The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.</p>
                                     <p>Often front-end development of a website is overlooked, but being the part of your project that combines design, back-end development and the layer that your users interact with, from my experience, it is the most important to get right.</p>
                                    
                                  </div>
                               </div>
                               <div className="col-sm-12 col-md-6 col-lg-3 mob-space-30"><img src={aboutimage} alt=""/></div>
                               <div className="col-sm-12 col-md-6 col-lg-3"><img src={aboutimage2} alt=""/></div>
                            </div>
                         </div>
                      </div>
      
                        
                   </div>
                   
        </RSC>
     </section>
    )
}
