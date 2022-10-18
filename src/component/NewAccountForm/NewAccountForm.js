import React, { useState } from "react";
import "./NewAccountForm.css";
import { district } from "../Data/Data";
const NewAccountForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    accountpassword: "",
    confirmpassword: "",
    streetaddress: "",
    city: "",
    phoneno: "",
    postalcode: "",
    districtlist: "",
  });
  const {
    firstname,
    lastname,
    email,
    accountpassword,
    confirmpassword,
    streetaddress,
    city,
    phoneno,
    postalcode,
    districtlist,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
  };

  return (
    <div className="user-form-container">
      <div className="main-user-form">
        <form onSubmit={handleSubmit}>
          <div className="name-input">
            <label>
              <p>First Name</p>
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={onChange}
                placeholder="Paw"
                required
              />
            </label>
            <label>
              <p>Last Name</p>
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={onChange}
                placeholder="Fect"
                required
              />
            </label>
          </div>
          <div className="contact-info">
            <label>
              <p>Email</p>
              <input
                type="email"
                placeholder="dev@gmail.com"
                name="email"
                value={email}
                onChange={onChange}
                pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                required
              />
            </label>
            <label>
              <p>Contact Number</p>
              <input
                type="tel"
                placeholder="017**-*******"
                name="phoneno"
                value={phoneno}
                onChange={onChange}
                pattern="[0-9]{11}"
                maxLength="11"
                required
              />
            </label>
          </div>
          <div className="create-password">
            <label>
              <p>New Password</p>
              <input
                className="show-icon"
                type={passwordShow ? "text" : "password"}
                name="accountpassword"
                placeholder="dev123*****"
                value={accountpassword}
                onChange={onChange}
                maxLength="8"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                required
              />
            </label>
            <label>
              <p>Confirm Password</p>
              <input
                type={passwordShow ? "text" : "password"}
                name="confirmpassword"
                placeholder="dev123***"
                value={confirmpassword}
                onChange={onChange}
                maxLength="8"
                required
              />
            </label>
          </div>
          <div className="show-pass">
            <input
              type="checkbox"
              className="checkbox-filed"
              onClick={() => setPasswordShow(!passwordShow)}
            />
            <p> Show Password</p>
          </div>
          <div className="address-info">
            <label>
              <p>Street Address</p>
              <textarea
                rows="4"
                cols="50"
                placeholder="House no & Road no "
                name="streetaddress"
                value={streetaddress}
                onChange={onChange}
                required
              ></textarea>
            </label>
            <label>
              <p>Town/City</p>
              <input
                type="text"
                placeholder="Dhaka "
                name="city"
                value={city}
                onChange={onChange}
                required
              />
            </label>
          </div>
          <div className="district-info">
            <label>
              <p>District</p>
              <select
                name="districtlist"
                value={districtlist}
                onChange={onChange}
                required
              >
                <option selected="true" disabled="disabled">
                  Select Your District
                </option>
                {district.map((product) => (
                  <option value={product.district}>{product.district}</option>
                ))}
              </select>
            </label>
            <label>
              <p>Postal Code</p>
              <input
                type="text"
                name="postalcode"
                placeholder="DHK007"
                value={postalcode}
                onChange={onChange}
                required
              />
            </label>
          </div>
          <div className="button-submit">
            <label>
              <button type="submit" className="button-log-in">
                Submit
              </button>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAccountForm;
