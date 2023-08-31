import React, { Component } from "react";
import { useRef, useState } from 'react'

const ContactDetails = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <div className="c">
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
    </div>
    /*<div class="login">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">    
                        <div class="register-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>First Name</label>
                                    <input class="form-control" type="text" placeholder="First Name"> </input>
                                </div>
                                <div class="col-md-6">
                                    <label>Last Name"</label>
                                    <input class="form-control" type="text" placeholder="Last Name"> </input>
                                </div>
                                <div class="col-md-6">
                                    <label>E-mail</label>
                                    <input class="form-control" type="text" placeholder="E-mail"> </input>
                                </div>
                                <div class="col-md-6">
                                    <label>Mobile No</label>
                                    <input class="form-control" type="text" placeholder="Mobile No"> </input>
                                </div>
                                <div class="col-md-6">
                                    <label>Password</label>
                                    <input class="form-control" type="text" placeholder="Password"> </input>
                                </div>
                                <div class="col-md-6">
                                    <label>Retype Password</label>
                                    <input class="form-control" type="text" placeholder="Password"> </input>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="login-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>E-mail / Username</label>
                                    <input class="form-control" type="text" placeholder="E-mail / Username"> </input>
                                </div>
                                <div class="col-md-6">
                                    <label>Password</label>
                                    <input class="form-control" type="text" placeholder="Password"> </input>
                                </div>
                                <div class="col-md-12">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="newaccount"> </input>
                                        <label class="custom-control-label" for="newaccount">Keep me signed in</label>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/

    );
};
export default ContactDetails;