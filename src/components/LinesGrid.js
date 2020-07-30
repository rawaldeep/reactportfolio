import React, { useEffect} from 'react'

export const LinesGrid = ({loader,handleLoader}) => {
    useEffect(() => {
        window.addEventListener("load", ()=>{
            setTimeout(()=>{
                handleLoader(false);
               }, 1000)
            
        });
   
    });
    return (
        <div className= {loader ? 'lines-grid' : 'lines-grid loaded' }>
        <div className='row'>
           <div className=" col-lg-3"></div>
           <div className=" col-lg-3">
              <div className='lines'>
                 <div className='line-1'></div>
                 <div className="line-2 delay10"></div>
              </div>
           </div>
           <div className=" col-lg-3">
              <div className='lines'>
                 <div className='line-1'></div>
              </div>
           </div>
           <div className=" col-lg-3">
              <div className='lines'>
                 <div className='line-1'></div>
                 <div className="line-2 delay0"></div>
              </div>
           </div>
        </div>
     </div>
    )
}
