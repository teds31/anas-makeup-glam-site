//imported dependencies
import React from "react"
import styled from "styled-components"

//imported colors
import { sapphire, purple } from "../styles"

const Contact = () => {
  return (
    <Wrapper id="contact" className="d-flex flex-column align-items-center justify-content-center flex-wrap">
      <h1 style={{color: `${purple}`, marginBottom: "15px", fontSize: "3rem"}}>Contact Me</h1>

      <p>Ready to get glammed up or have any questions? Call or send me a message!</p>
        <a className="phone-link" href="tel:702-381-3158">(702) 347-0858</a>

        <a className="email-link" href="mailto: anasmakeup87@yahoo.com">
          AnasMakeup87@yahoo.com
        </a>
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

  button {
    background-color: ${purple};
    padding: 5px;
    margin-top: 20px;
    color: white;
    border-radius: 5px;
    width: 220px;
    height: 37px;
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