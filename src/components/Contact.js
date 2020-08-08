//imported dependencies
import React, { useState } from "react"
import styled from "styled-components"
import Validator from "validator"

import { sapphire, purple } from "../styles"

const Contact = () => {
  //setting name & name error's initial state to "empty string"
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")

  //setting email & email error's initial state to "empty string"
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  //setting subject & subject error's initial state to "empty string"
  const [subject, setSubject] = useState("")
  const [subjectError, setSubjectError] = useState("")

  //setting message & message error's initial state to "empty string"
  const [message, setMessage] = useState("")
  const [messageError, setMessageError] = useState("")

  //setting status's initial state to "empty string"
  const [status, setStatus] = useState("")

  //on submit do this ... :
  const onSubmit = (e) => {
    //prevent default
    e.preventDefault();
    //target the form
    const form = e.target;
    //sets data to NEW form data
    const data = new FormData(form);
    //creating a new http request
    const xhr = new XMLHttpRequest();

    //setting valid to true
    let valid = true;

    //if name value is alpha, set error === "" , if not set an error
    if (Validator.isAlpha(name)) {
      setNameError("")
    } else {
      valid = false
      setNameError("Name cannot be blank")
    }

    //if email value is valid, set error === "" , if not set an error
    if (Validator.isEmail(email)) {
      setEmailError("")
    } else {
      valid = false
      setEmailError("Please enter a valid email")
    }

    //if subject value is alpha, set error === "" , if not set an error
    if (Validator.isAlpha(subject)) {
      setSubjectError("")
    } else {
      valid = false
      setSubjectError("Subject cannot be blank")
    }

    //if message value is alpha, set error === "" , if not set an error
    if (Validator.isAlpha(message)) {
      setMessageError("")
    } else {
      valid = false
      setMessageError("Message cannot be blank")
    }

    //if the form is valid... :
    if(valid) {
      //open the method & action
      xhr.open(form.method, form.action);
      // set the req. header to "accept"
      xhr.setRequestHeader("Accept", "application/json");

      xhr.onreadystatechange = () => {
        //if req is done, return
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        // if status === 200...: 
        if (xhr.status === 200) {
          //clear the form
          form.reset();
          // && set status's value === SUCCESS
          setStatus("SUCCESS");
        } else {
          // else ... you failed! set error
          setStatus("ERROR");
        }
      }
      //send the form :)
      xhr.send(data);
    }    
  }
  
  return (
    <Wrapper id="contact" className="d-flex flex-column align-items-center justify-content-center flex-wrap">
      <h1 style={{color: `${purple}`, marginBottom: "15px", fontSize: "3rem"}}>Contact Me</h1>

      <p>Ready to get glammed up or have any questions? Call or send me a message!</p>

      <form action="https://formspree.io/xbjzqboy" method="POST" onSubmit={onSubmit} className="d-flex flex-wrap flex-column align-items-center text-center justify-content-center" >
        <input id="name" className={nameError ? "input-error" : ""} type="text" name="name" placeholder={nameError ? "please enter your name" : "Name :"} onChange={e => setName(e.target.value)} />

        <input id="email" className={nameError ? "input-error" : ""} type="email" name="email" placeholder={emailError ? "please enter a valid email" : "Email :"} onChange={e => setEmail(e.target.value)} /> 

        <input className={nameError ? "input-error" : ""} type="text" name="subject" placeholder={subjectError ? "please enter a subject" :"Subject :"} onChange={e => setSubject(e.target.value)} />
        
        <textarea className={messageError ? "input-error" : ""} name="message" placeholder={messageError ? "please enter a message" : "type your message here :"} onChange={e => setMessage(e.target.value)} />

        {status === "SUCCESS" ? <p>Thanks! Your message has been submitted.</p> : <button type="submit">Send</button>}
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 45px;
  color: ${sapphire};

  form {
    margin: 20px;
  }

  input, textarea {
    margin: 15px;
    border: none;
    border-bottom: 1px solid ${purple};
    width: 500px;
    padding: 10px 5px 5px 15px;

    ::placeholder {
      color: ${sapphire};
    }
  }

  input:focus, textarea:focus {
    outline: none;
    border: 1px solid ${purple};
    border-radius: 5px;
  }

  input {
    height: 50px;
  }

  textarea {
    height: 100px;
    resize: none;
    overflow: scroll;
  }

  .input-error {
    border-radius: 5px;
    border: 1px solid red;

    ::placeholder {
      color: red;
    }
  }

  button {
    background-color: ${purple};
    padding: 5px;
    margin-top: 20px;
    color: white;
    border-radius: 5px;
    width: 220px;
    border: none;
    float: left;
  }

  @media only screen and (max-width: 600px) {
    input, textarea {
      width: 220px;
      padding: 10px 5px 5px 15px;
    }
  }
`

export default Contact