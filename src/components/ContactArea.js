import React, { useState }  from 'react';
import emailjs from 'emailjs-com'
import RSC from "react-scrollbars-custom";


export const ContactArea = ({menu}) => {
   const [Contactform, SetContactform] = useState({
      name: 'Full Name',
      email: 'Email Adress',
      message: 'Message'
     });
     const handleForm = (e) =>{
      e.preventDefault();
      const formData = new FormData(e.target)
for (var pair of formData.entries()) {
    SetContactform({
         ...Contactform,
         [pair[0]] : [pair[1]]
        })
}
        emailjs.sendForm('gmail', 'template_qr0JoFLS', e.target, 'user_EA7Fam3qFPQWmaOEk8xH1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     }
    
     const focusHandle = (e) => {
      SetContactform({
         ...Contactform,
         [e.target.name] : ''
        })
     }
     const blurHandle = (e) => {
      if(e.target.value === ''){
        if(e.target.name === 'name'){  SetContactform({...Contactform, name : 'Full Name'})  }
        if(e.target.name === 'email'){  SetContactform({...Contactform, email : 'Email Adress'})  }
        if(e.target.name === 'message'){ SetContactform({...Contactform, message : 'Message'}) }
      }
     }
     const handleChange = (e) => {
      SetContactform({
       ...Contactform,
       [e.target.name] : e.target.value
      })
    
   }
     
     
    return (
        <section className={menu ? "area-inner area-started active": "area-inner area-started active paddingAdjust"} >
        <RSC style={{ height: "100vh" }}>
        <div className="contact">
                      <div className="vertical-align-pt centerX">
                      <div className='container'>
                         <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3"></div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                               <div className="contact-wrapper">
                                  <div className="title-pt go-center">
                                     <h2>Need Some Help?</h2>
                                  </div>
                                  <div className="form-pt">
                                  <form onSubmit={handleForm}>
                                     <input name='name' placeholder={Contactform.name} value={Contactform.name}  onFocus={focusHandle} onBlur={blurHandle} onChange={handleChange} />
                                     <input name='email' type='email' placeholder={Contactform.email} value={Contactform.email}  onFocus={focusHandle} onBlur={blurHandle} onChange={handleChange} />
                                     <textarea name="message" cols="30" rows="7" placeholder={Contactform.message} value={Contactform.message}  onFocus={focusHandle} onBlur={blurHandle} onChange={handleChange}></textarea>
                                     <input className="pt-button-regular" type="submit" value="Talk to A Human"/>
                                  </form>
                                  </div>
                               </div>
                            </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   
        </RSC>
     </section>
    )
}
