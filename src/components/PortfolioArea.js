import React, { useState, useEffect } from 'react';
import RSC from "react-scrollbars-custom";
import Isotope from "isotope-layout";
import { TechLogos } from './TechLogos';
import portfolio1 from '../assets/images/revamp.jpeg';
import portfolio2 from '../assets/images/groversgsm.png';
import portfolio3 from '../assets/images/warda.jpeg';
import portfolio4 from '../assets/images/404.jpeg';
import portfolio5 from '../assets/images/PRiZM.jpeg';
import portfolio6 from '../assets/images/omegafinancial.jpeg';
import portfolio7 from '../assets/images/UwBouwdroger.jpeg';
import portfolio8 from '../assets/images/VIAImmobilien.jpeg'
import portfolio9 from '../assets/images/FantastischBelgisch.jpeg';
// import { Link } from 'react-router-dom';

const filtersDefault = [
   { id: 1, label: "All", isChecked: true },
   { id: 2, label: "Wordpress", isChecked: false },
   { id: 3, label: "Front-End", isChecked: false },
   { id: 4, label: "UI-UX-Design", isChecked: false }
 ];

const grid = [
   {item: "Sass Landing", image: portfolio1, type: "Front-End"},
   {item: "ECommerce", image: portfolio2, type: "Wordpress"},
   {item: "Photografer Portfolio", image: portfolio3, type: "Front-End"},
   {item: "404", image: portfolio4, type: "UI UX Design"},
   {item: "Prizm", image: portfolio5, type: "Wordpress"},
   {item: "Omega financial website", image: portfolio6, type: "Wordpress"},
   {item: "Uw Bouwdroger", image: portfolio7, type: "Wordpress"},
   {item: "VIA Immobilien", image: portfolio8, type: "UI-UX-Design"},
   {item: "FantastischBelgisch", image: portfolio9, type: "Wordpress"}
]

export const PortfolioArea = ({menu}) => {
   const [filters, setFilters] = useState(filtersDefault);
   const [isotope, setIsotope]  = useState(null);
   const [filterKey, setFilterKey] = useState("All");
   const intializeIsotope = () =>{
      setIsotope(
         new Isotope(".pt-portfolio-items", {
           itemSelector: ".pt-portfolio-item",
           layoutMode: "fitRows"
         })
       );
   }
   useEffect(intializeIsotope, []);
    useEffect(
      () => {
        if (isotope) {
          filterKey === "All"
            ? isotope.arrange({ filter: `*` })
          : isotope.arrange({ filter: `.${filterKey}` });
        }
      },
      [isotope, filterKey]
    );
    useEffect(()=>{
      setFilterKey('All')
    }, []);
   const handleFilterclick = (id) =>{
      let arr = []; 
      filtersDefault.forEach(element => {
         element.isChecked = false
         if(element.id === id){
            element.isChecked = true
         
            setFilterKey(element.label)
            
         }
         arr.push(element)
      });
      setFilters(arr);
   }

   
    return (
        <section className={menu ? "area-inner area-started active": "area-inner area-started active paddingAdjust"} >
        <RSC style={{ height: "100vh" }}>
                   <div className="portfolios">
                      <div className="container">
                         <div className="portfolio-wrapper">
                            <div className="row">
                               <div className="col-sm-12 col-md-12 col-lg-12">
                                  <div className="title-pt go-center">
                                     <h2>Portfolio</h2>
                                     <h6>Best works for the awesome people out there</h6>
                                  </div>
                               </div>
                               <div className="col-md-12">
                                  <div className="cat-nav">
                                     <ul className="list-inline go-center">
                                     {filters.map(f => (
          <li key={`${f.id}_key`} onClick={()=>handleFilterclick(f.id)} className= {"list-inline-item "+(f.isChecked ? 'active' : '' )}>
          {f.label}
          </li>
        ))}
                                     </ul>
                                  </div>
                               </div>
                            </div>
                            <div className="pt-portfolio-items sirat-portfolio-style-one row">

                            {grid.map( p => (
                              <div key={p.item} className={`pt-portfolio-item ${p.type} col-lg-4 col-md-6`}>
                                  <div className="single-image">
                                     <div className="porfolio-img">
                                         <img src= {`${p.image}`} alt={p.type}/>
                                         <h5><a>{p.item}</a></h5>
                                         
                                     </div>
                                  </div>
                               </div>
                            ))}
                               
                            </div>
                         </div>
                        <TechLogos/>
                      </div>
                   </div>
        </RSC>
     </section>
    )
}
