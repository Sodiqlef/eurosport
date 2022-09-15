import React, { useState, useReducer } from "react";
import Input from "../Shared/input";
import { VALIDATOR_REQUIRE } from "../Shared/validator";

import fb from './fb.jpg';

const SupportForm = (props) => {

    let [id, setId] = useState(Math.random())
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')
    let [tc, setTC] = useState(false)




    const addSuppportHandler = (event) => {
        event.preventDefault(); 
        const newSupport = {
            id,
            username, 
            email,
            message,
            tc
        }
        props.supports(newSupport)
        console.log(newSupport)

    }
    
        return <React.Fragment>
            <div className="w3-card-4  support-form">
            <div className="w3-container blue-bg">
            <h2>Support</h2>
            </div><br />

            <form onSubmit={addSuppportHandler} className="">
                    
            <Input ot='input' type={'text'} placeholder="Username" validators={[VALIDATOR_REQUIRE()]}/>        
            <Input ot='input' placeholder="Email Address" type={'email'} />
            <Input ot='textarea'placeholder="How may we help you?."/>        
            Accept all terms and conditions:   <input type={'checkbox'}/><br />
        <input type={'submit'} className="w3-btn blue-bg" />
        
    </form>
    </div>
        <img src={fb} alt='form' className="form-img w3-card-4" />
    
    </React.Fragment>
    }

 
export default SupportForm;