import React, { useState } from 'react';
import {Preloader} from './components/Preloader';
import {LinesGrid} from './components/LinesGrid';
import { MobileHeader } from './components/MobileHeader';
import { Header } from './components/Header';
import { ContentWrapper } from './components/ContentWrapper';
import {
  BrowserRouter as Router
} from "react-router-dom";

import './App.css';

function App() {
  const [Globalstate, setGlobalstate] = useState( {
    menu : false,
    mobilemenu : false,
    loader : true
  } );
  const navClick = (open) =>{
    setGlobalstate({
      ...Globalstate,
      menu: open,
    })
  }
  const mobnavClick = (open) =>{
    setGlobalstate({
      ...Globalstate,
      menu: open,
      mobilemenu : open,
      loader: open
    })
  }
  const handleLoader = (val) => {
     if(Globalstate.mobilemenu){
      setGlobalstate({
        ...Globalstate,
        menu: false,
      mobilemenu : false,
      loader: false
      })
     }else{
      setGlobalstate({
        ...Globalstate,
        loader: val,
      })
     }
  }
 
  return (
    <>
      <Preloader/>
      <Router>
      <MobileHeader handleLoader={handleLoader} menu={Globalstate.menu} navclick={mobnavClick} />
     <Header menu={Globalstate.menu} mobmenu={Globalstate.mobmenu} handleLoader={handleLoader}/>
     <ContentWrapper navclick={navClick} menu={Globalstate.menu}/>
     </Router>
      <LinesGrid loader={Globalstate.loader} handleLoader={handleLoader} />
    </>

  );
}

export default App;
