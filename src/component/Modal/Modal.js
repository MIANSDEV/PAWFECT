import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = ({ openForm, handleCancel }) => {
  return (
    <div
      className={`modal-container ${openForm && "hidden"}`}
      onClick={() => handleCancel()}
      onScroll={() => handleCancel()}
    >
      <div className="main-modal">
        <div className="modal-header">
          <h1>Sign In</h1>
          <IoCloseCircleOutline className="close-icon" />
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
      <div className="button-log-in">
        <button type="submit">Log In</button>
        <p>
          Don't Have an Account?{" "}
          <Link to={"/editform"}>
            {" "}
            <span>Register Here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Modal;
