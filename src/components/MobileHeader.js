import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MobileHeader = ({navclick, menu, handleLoader}) => {
    const currentRoute= useLocation().pathname;
    const loaderControl = (url) =>{
        if(url !== currentRoute){
                    handleLoader(true);
                   setTimeout(()=>{
                     handleLoader(false);
                    }, 1000)
        } 
      }
    
    return (
        <div className="mobhead mobile_visible">
                <div className="logo">
                   <Link onClick={()=>loaderControl('/')}  to='/'>
                      <h2>Rawaldeep<span></span></h2>
                   </Link>
                </div>
                <a onClick={()=> navclick( menu ? false : true ) } className= { menu ? "menu-toggle open" : "menu-toggle"}>
                <FontAwesomeIcon icon={faBars}/>
                <FontAwesomeIcon icon={faTimes}/>
                </a> 
        </div>
    )
}
