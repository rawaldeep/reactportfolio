import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import { HomeArea } from './HomeArea';
import { ResumeArea } from './ResumeArea';
import { PortfolioArea } from './PortfolioArea';
import { AboutArea } from './AboutArea';
import { ContactArea } from './ContactArea';

export const Router = ({menu}) => {
    return (
        <AnimatedSwitch
        atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
        >
          <Route exact path="/">
          <HomeArea menu={menu}/>
          </Route>
          <Route exact path="/resume">
          <ResumeArea menu={menu}/>
          </Route>
          <Route exact path="/portfolio-area">
          <PortfolioArea menu={menu}/>
          </Route>
          <Route exact path="/about-area">
          <AboutArea menu={menu}/>
          </Route>
          <Route exact path="/contact-area">
          <ContactArea menu={menu}/>
          </Route>
        </AnimatedSwitch>  
    )
}
