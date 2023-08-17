import React from 'react'
import "../../Styles/CustomerSupport.css"
import { useRef, useState } from 'react'
import ContactDetails from '../../Components/userDetailsContactUs';
// import emailjs from '@emailjs/browser';


const CustomerSupport = () => {
    
    return (
        <div>   
        <div></div>
        <ContactDetails/>
        </div>
        /*<div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Us</h1>
                    <div className="c-info">
                        <div className="c-info-item">

                            +94 41 2286750
                        </div>
                        <div className="c-info-item">

                            RTS-Library-official@gmail.com
                        </div>
                        <div className="c-info-item">

                            UoM, Sri Lanka, Earth..
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>“The only thing you absolutely have to know, is the location of the library” - Albert Einstein. </b> 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />

                        <div style={{ alignItems: 'center', padding: '20px', display: 'flex' }}>
                            <button type="submit" style={{ width: '100%' ,backgroundColor:"brown" }} class="btn btn-success"> {done ? "Send Again" : "Send"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>*/
    );
};

export default CustomerSupport;
