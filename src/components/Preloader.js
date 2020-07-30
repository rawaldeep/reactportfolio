import React, {useState, useEffect} from 'react'

export const Preloader = () => {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        window.addEventListener("load", ()=>{
            setTimeout(()=>{
                setLoad(false);
               }, 1000)
            
        });
    });
    return (
        <div className= {load ? 'preloader' : 'preloader fadeOut' }>
                <div className="centrize full-width">
                   <div className="vertical-center">
                      <div className= {load ? 'spinner' : 'spinner fadeOut' }>
                         <div className="double-bounce1"></div>
                         <div className="double-bounce2"></div>
                      </div>
                   </div>
                </div>
             </div>
    )
}
