import React from 'react';
import cartoonrawal from '../assets/images/rawaldeep_resume.png';
import { faMapMarkerAlt, faFlask, faPenFancy, faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from "../assets/Rawaldeep's Resume[en].pdf";
import collage1 from "../assets/images/resume1.png";
import collage2 from "../assets/images/resume2.png";
import collage3 from "../assets/images/resume3.png";
import RSC from "react-scrollbars-custom";
import { Link } from 'react-router-dom';

export const ResumeArea = ({menu}) => {
    return (
        <section className={menu ? "area-inner area-started active": "area-inner area-started active paddingAdjust"} >
        <RSC style={{ height: "100vh" }}>
        <div className="resume">
           <div className="container">
              <div className="top-area">
                 <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                       <div className="title-pt go-center">
                          <h2>Resume</h2>
                          <h6>Front End & WordPress Web Developer, UI/UX Designer</h6>
                       </div>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                       <div className="resume-left">
                          <div className="profile-cover">
                             <div className="button-3d-pt">
                                <Link className="pt-button" to={Resume} target="_blank" download>
                                  <span className="one-pt">Download</span>
                                  <span className="two-pt"></span>
                                  <span className="three-pt">Resume</span>
                               </Link>
                            </div>
                             <div className="row">
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                   <div className="profile-pic profile-space">
                                      <img src={cartoonrawal} alt="Rawaldeep Singh"/>
                                     </div>
                                </div>
                                <div className="col-sm-12 col-md-8 col-lg-8">
                                   <div className="user-details">
                                      <div className="name">
                                         <h4>Rawaldeep Singh</h4>
                                      </div>
                                      <div className="location">
                                      <FontAwesomeIcon icon={faMapMarkerAlt}/> Lier, Belgium</div>
                                      <div className="bio">
                                         <p>I know your time is limited. So - I'm based in Lier, Belgium. I am a Full Stack Web Developer. My skills include and are not limited to Wordpress, PSD to HTML5/CMS conversion.</p>
                                      </div>
                                   </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                   <div className="profile-info">
                                      <div className="icon-info">
                                      <FontAwesomeIcon icon={faFlask}/>
                                      </div>
                                      <div className="details-info">
                                         <h6>Web</h6>
                                         <p>Developer</p>
                                      </div>
                                   </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                   <div className="profile-info">
                                      <div className="icon-info">
                                      <FontAwesomeIcon icon={faPenFancy}/>
                                      </div>
                                      <div className="details-info">
                                         <h6>Web</h6>
                                         <p>Designer</p>
                                      </div>
                                   </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                   <div className="profile-info">
                                      <div className="icon-info">
                                      <FontAwesomeIcon icon={faBrain}/>
                                      </div>
                                      <div className="details-info">
                                         <h6>UX/UI</h6>
                                         <p>Designer</p>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                       <div className="resume-right">
                          <div id="skill-area" className="about-sklls-area">
                             <div className="single-skills">
                                <div className="bar-content"> <span className="skills-heading">HTML5</span></div>
                             </div>
                             <div className="single-skills">
                                <div className="bar-content"> <span className="skills-heading">CSS3 & SASS/SCSS</span></div>
                             </div>
                             <div className="single-skills">
                                <div className="bar-content"> <span className="skills-heading">Javascript & Jquery</span></div>
                             </div>
                             <div className="single-skills">
                                <div className="bar-content"> <span className="skills-heading">Wordpress</span></div>
                             </div>
                             <div className="single-skills">
                                <div className="bar-content"> <span className="skills-heading">PHP</span></div>
                             </div>
                             <div className="single-skills">
                                  <div className="bar-content"> <span className="skills-heading">ReactJS</span></div>
                             </div>
                             <div className="single-skills">
                                  <div className="bar-content"> <span className="skills-heading">NodeJS</span></div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
               <div className="experience-zone">
                 <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                       <div className="education">
                          <h4 className="inner-title">Education</h4>
                          <div className="education-border">
                             <div className="education-wrapper">
                                <div className="edu-item">
                                   <div className="item-header">
                                      <h6>BeCode.org</h6>
                                      <p>2018 - 2019 | Full-stack Webdevelopment</p>
                                   </div>
                                   <p>It's through curiosity and looking at opportunities in new ways that we've always mapped our path. Thus my path let me here and i became a full-stack developer.</p>
                                </div>
                                <div className="edu-item">
                                   <div className="item-header">
                                      <h6>TGC Animation and Multimedia</h6>
                                      <p>2015 - 2016 | Web-Design, Development and Marketing</p>
                                   </div>
                                   <p>I always belive in basic, he who is strong in basic can make the most successful product. So I spend time making my basic stronger in programming domain. Today I'm getting that sweet result while developing websites.</p>
                                </div>
                                <div className="edu-item">
                                   <div className="item-header">
                                      <h6>Graduation</h6>
                                      <p>2011 - 2014 | Commerce</p>
                                   </div>
                                   <p>Yes! I am a commerce graduate. During my graduation years i learned a lot about the economics behind the trade that we do everyday and things that go in marketing of your own product.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="collage-area">
                 <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4"><img src= {collage1} alt=""/></div>
                    <div className="col-sm-12 col-md-4 col-lg-4"><img src= {collage2}  alt=""/></div>
                    <div className="col-sm-12 col-md-4 col-lg-4"><img src= {collage3}  alt=""/></div>
                 </div>
              </div>
           </div>
        </div>
        </RSC>
     </section>
    )
}
