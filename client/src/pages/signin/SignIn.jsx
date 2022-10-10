import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <Form>
        <div className="title">
          <h1>Sparkle</h1>
        </div>
        <div className="subtitle">
          <h3>Learning Management System</h3>
        </div>
        <div className="input-form">
          <input className="username" placeholder="Username" type="text" />
          <input className="password" type="password" placeholder="Password" />
          <NavLink to={"/"}>
            <button className="signinBtn" type="submit">
              SignIn
            </button>
          </NavLink>
        </div>
        <div className="forgot-password">
          <p>Forgot Password</p>
        </div>
        <div className="create-account">
          <p>
            Don't have an account?{" "}
            <NavLink to={"/signup"}>
              <button className="signupNavBtn">Click here</button>
            </NavLink>
          </p>
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
  padding-top: 5rem;

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
  .input-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;

    .username {
      font-size: large;
      font-weight: 900;
      margin-bottom: 1rem;
      height: 40px;
      width: 400px;
      border-radius: 20px;
      border: none;
      padding-left: 15px;
    }
    .password {
      font-size: large;
      font-weight: 900;
      height: 40px;
      width: 400px;
      border-radius: 20px;
      padding-left: 15px;
      border: none;
    }

    .signinBtn {
      width: 200px;
      height: 40px;
      margin-top: 50px;
      border-radius: 10px;
      border: none;
      background: #1195f2;
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
    }
  }
  .forgot-password {
    margin-top: 2rem;
    color: #a1a1a1;
  }
  .create-account {
    margin-top: 2rem;
    color: #a1a1a1;
  }
  .signupNavBtn {
    padding: 0 5px;
    background: #1195f2;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default SignIn;
