import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function SignUp() {
  return (
    <div>
      <Form>
        <div className="title">
          <h1>Sparkle</h1>
        </div>
        <div className="subtitle">
          <h3>Learning Management System</h3>
        </div>
        <div className="form-title">
          <h3>Sign Up</h3>
        </div>
        {/* personal information */}
        <div className="input-form">
          <div className="column">
            <input className="fullname" type="text" placeholder="Fullname" />
            <input className="institute" type="text" placeholder="Institute" />
            <input type="text" placeholder="Registration No" />
          </div>
          {/* Credentials */}
          <div className="column">
            <input className="username" type="text" placeholder="Username" />
            <br />
            <input
              className="password"
              type="password"
              placeholder="Password"
            />
            <input
              className="confirm-password"
              type="password"
              placeholder="Confirm Password"
            />
            <NavLink to={"/signin"}>
              <button className="signupBtn">Sign Up</button>
            </NavLink>
          </div>
        </div>
      </Form>
    </div>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 30px;
    color: white;
    letter-spacing: 3px;
  }
  .subtitle {
    padding-top: 1rem;
    font-size: 20px;
    color: #a1a1a1;
    font-weight: 100;
  }
  .form-title h3 {
    color: white;
    font-size: 25px;
    margin-top: 10px;
  }
  .signupBtn {
    background: #1195f2;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }

  .input-form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 50px;

    .column {
      flex: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: max-content;
    }
  }

  .input-form input {
    width: 500px;
    height: 40px;
    border: none;
    border-radius: 20px;
    padding-left: 20px;
    margin-bottom: 25px;
    font-size: 18px;
  }
`;

export default SignUp;
