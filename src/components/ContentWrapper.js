import React from 'react';
import { Router } from './Router';


export const ContentWrapper = ({navclick, menu}) => {
    return (
        <div className="content-wrapper">
                  <div onClick={()=> navclick( menu ? false : true ) } className= { menu ? "navToggle open" : "navToggle" }>
                        <div className="icon"></div>
                   </div>               
        <Router menu={menu}/>
        </div>
    )
}
