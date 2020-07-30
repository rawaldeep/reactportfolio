import React from 'react';
import php from '../assets/images/php.png';
import bootstrap from '../assets/images/bootstrap.png';
import sass from '../assets/images/sass.png';
import nodejs from '../assets/images/nodejs.png';
import html5 from '../assets/images/html5.png';
import javascript from '../assets/images/javascript.png';
import jquery from '../assets/images/jquery.png';
import wordpress from '../assets/images/wordpress.png';

export const TechLogos = () => {
    const logos = [
        {id: 1, src: php, alt: "php developer" },
        {id: 2, src: bootstrap, alt: "bootstrap developer" },
        {id: 3, src: sass, alt: "scss developer" },
        {id: 4, src: nodejs, alt: "nodejs developer" },
        {id: 5, src: html5, alt: "html5 developer" },
        {id: 6, src: javascript, alt: "javascript developer" },
        {id: 7, src: jquery, alt: "jquery developer" },
        {id: 8, src: wordpress, alt: "wordpress developer" },
    ]

    
    
    return (
        <div className="partner-logo go-center">
                            <h2>Tech I Use</h2>
                            <div className="row">
                            {logos.map(logo =>(
                                <div key={logo.id} className="col-sm-3 col-md-3 col-lg-3">
                                  <div className="client-logo"><img src={logo.src} alt={logo.alt}/></div>
                               </div>   
           ))}
                           
                            </div>
            </div>
    )
}
