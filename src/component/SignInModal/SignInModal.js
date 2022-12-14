import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./SignInModal.css";

const SignInModal = ({ openForm, handleCancel }) => {
  return (
    <div
      className={`modal-container ${openForm && "hidden"}`}
      onClick={() => handleCancel()}
      // onScroll={() => handleCancel()}
    >
      <div className="main-modal">
        <div className="modal-header">
          <h1>Sign In</h1>
          <IoCloseCircleOutline
            className="close-icon"
            onClick={() => handleCancel()}
          />
        </div>

        <div className="input-filed">
          <label>
            <p>Email</p>
            <input type="email" placeholder="dev@gmail.com " />
          </label>

          <label>
            <p>Password</p>
            <input type="password" placeholder="Enter your Password " />
          </label>
        </div>
      </div>
      <div className="main-button-log-in">
        <button className="button-log-in" type="submit">
          Log In
        </button>
        <p>
          Don't Have an Account?{" "}
          <Link to={"/userform"}>
            {" "}
            <span onClick={() => handleCancel()}>Register Here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
