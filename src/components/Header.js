import React from 'react';
import {
   Link,
   useLocation
 } from "react-router-dom";
// get our fontawesome imports
import { faHome, faFile, faBriefcase, faAlignLeft, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faBehance} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = ({menu, mobmenu, handleLoader}) => {
   const currentRoute= useLocation().pathname;
   let nav = [
      {id: 1, label: 'Home', url: '/', icon: faHome },
      {id: 2, label: 'Resume', url: '/resume', icon: faFile },
      {id: 3, label: 'Portfolio', url: '/portfolio-area', icon: faBriefcase },
      {id: 4, label: 'About', url: '/about-area', icon: faAlignLeft },
      {id: 5, label: 'Contact', url: '/contact-area', icon: faPaperPlane },
   ]
   
   const loaderControl = (url) =>{
     if(url !== currentRoute){
                 handleLoader(true);
                setTimeout(()=>{
                  handleLoader(false);

                 }, 1000)
     } 
   }
   const links = nav.map(link=>{
      return(
         <li key={link.id} className={currentRoute === link.url ? 'active' : ''}>
         <Link onClick={()=>loaderControl(link.url)} to={link.url} className="nav-pt-new">
         <span className="menu-icon violet">
         <FontAwesomeIcon icon={link.icon}/>
         </span>
         <span className="link">{link.label}</span>
         </Link>
         </li>
      )
   })
   const className = () =>{
      if(menu){
         if(mobmenu){
            return("header menuOpen")
          
         }else{
          return("header menuOpen mobile-menu-hide")
         }
      }else{
       return("header")
      }
   }
    return (
        <header className={className()}>
        <div className="header-bg">
           <div className="logo">
              <Link onClick={()=>{
                 if(currentRoute !== '/'){
                  handleLoader(true);
                setTimeout(()=>{
                  handleLoader(false);
                 }, 1000)
                 }
              }} to="/">
                 <h2>Rawaldeep<span></span></h2>
              </Link>
           </div>
           <div className="main-nav">
              <ul>
              {links}
              </ul>
           </div>
        </div>
        <div className="footer-area">
          <div className="mail-pt"><a href="tel:0466059919"><FontAwesomeIcon icon={faPhone}/> 0466059919</a><br/><br/><a href="mailto:rawaldeepsingh26@gmail.com">rawaldeepsingh26@gmail.com</a></div>
           <div className="social-pt">
              <ul>
                 <li><a href="https://www.linkedin.com/in/rawaldeep/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                 <li><a href="https://github.com/rawaldeep/" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
                 <li><a href="https://www.behance.net/rawaldeeps4ca5" target="_blank"><FontAwesomeIcon icon={faBehance}/></a></li>
              </ul>
           </div>
        </div>
     </header>
    )
}
