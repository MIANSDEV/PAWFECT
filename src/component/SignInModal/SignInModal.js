import React from "react";
import "./SignInModal.css";

const SignInModal = ({ openForm, handleCancel }) => {
  return (
    <div
      className="sing-in-container"
      onClick={() => handleCancel()}
      onScroll={() => handleCancel()}
    >
      <div className={`main-sing-card  ${openForm && "hidden"}`}>
        <form>
          <h1>Sign In</h1>
          <div>
            <p>Email</p>
            <input
              type="email"
              required
              name="email"
              placeholder=" Enter your email address"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              required
              name="password"
              placeholder=" Enter Password"
            />
          </div>

          <div>
            <button type="button" className="button">
              <h1>Log In</h1>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
