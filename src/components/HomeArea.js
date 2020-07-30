import React from 'react';
import Logo from '../assets/images/rawaldeep_home.png';
import Typed from 'react-typed';

export const HomeArea = ({menu}) => {
    return (
           <section
            className={menu ? "area-inner area-started active": "area-inner area-started active paddingAdjust"}>
                   <div className="hero">
                      <div className="container">
                         <div className="row">
                            <div className="col-sm-12 col-md-5 col-lg-6">
                               <div className="relative-pt">
                                  <div className="vertical-align-pt centerX">
                                     <div className="slider-img">
                                     <img src={Logo} alt="Rawaldeep Singh"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-sm-12 col-md-7 col-lg-6">
                               <div className="relative-pt">
                                  <div className="vertical-align-pt">
                                     <div className="slider-text">
                                        <div className="main-text">
                                           Hello, I am Rawaldeep Singh. I am a <br/>
                                           <div className='typing-title'>
                                              <p><strong><Typed
                strings={[
                    'UI/UX designer ',
                    'Web developer',
                    'Wordpress developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed></strong></p>
                                           </div>
                                           <span className="typed-title"></span>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                               
                            </div>
                         </div>
                      </div>
                      
                   </div>
                </section> 
    )
}
