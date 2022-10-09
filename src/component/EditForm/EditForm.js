import React, { useState } from "react";
import "./EditForm.css";
import { district } from "../Data/Data";

const EditForm = () => {
  const [password, setPassword] = useState(true);
  const [passwordShow, setPasswordShow] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    accountpassword: "",
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
    streetaddress,
    city,
    phoneno,
    postalcode,
    districtlist,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="main-edit-form-container">
      <div className="edit-form">
        <form onSubmit={handleSubmit}>
          <div>
            <p>First Name</p>
            <input
              type="text"
              required
              name="firstname"
              value={firstname}
              onChange={onChange}
            />
          </div>
          <div>
            <p>Last Name</p>
            <input
              type="text"
              required
              name="lastname"
              value={lastname}
              onChange={onChange}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="main-checkbox-filed">
            <input
              type="checkbox"
              className="checkbox-filed"
              onClick={() => setPassword(!password)}
              name="account"
              onChange={onChange}
            />
            <p>Create an account?</p>
          </div>
          <div className={`${password && "hidden"}`}>
            <p>Create Password</p>
            <input
              type={passwordShow ? "text" : "password"}
              name="accountpassword"
              value={accountpassword}
              onChange={onChange}
            />
            <div className="main-checkbox-filed">
              <input
                type="checkbox"
                className="checkbox-filed"
                onClick={() => setPasswordShow(!passwordShow)}
              />
              <p> Show Password</p>
            </div>
          </div>
          <div>
            <p>Phone Number</p>
            <input
              type="tel"
              required
              name="phoneno"
              value={phoneno}
              onChange={onChange}
              pattern="[0-9]{11}"
            />
          </div>
          <div>
            <p>Street Address</p>
            <input
              type="text"
              placeholder="House no & Road no "
              required
              name="streetaddress"
              value={streetaddress}
              onChange={onChange}
            />
          </div>
          <div>
            <p>Town/City</p>
            <input
              type="text"
              placeholder="City Name "
              required
              name="city"
              value={city}
              onChange={onChange}
            />
          </div>
          <div className="select-tag">
            <p>District</p>
            <select
              name="districtlist"
              value={districtlist}
              onChange={onChange}
            >
              {district.map((product) => (
                <option value={product.district}>{product.district}</option>
              ))}
            </select>
          </div>
          <div>
            <p>Postal/ZIp Code</p>
            <input
              type="number"
              placeholder="Postal Code "
              required
              name="postalcode"
              value={postalcode}
              onChange={onChange}
            />
          </div>
          <div className="submit-button">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
