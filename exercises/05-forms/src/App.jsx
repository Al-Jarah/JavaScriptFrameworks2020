import React, { useState } from "react";
import "./App.css";
import countries from "./assets/countries.json";
import states from "./assets/states.json";

function App() {
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const [displayMessage, setDisplayMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayMessage(true);
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      {/* You will need to handle form submission */}
      <div className="form-group">
        {/* label */}
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        {/* input box */}
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        {/* label */}
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        {/* input box */}
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        {/* input box */}
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={values.addressLine1}
          onChange={handleChange}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        {/* input box */}
        <input
          id="city"
          name="city"
          type="text"
          className="form-control"
          value={values.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select
          id="state"
          name="state"
          className="form-control"
          value={values.state}
          onChange={handleChange}
        >
          <option value=""> Please Select An option</option>
          {states.map((state, idx) => {
            return (
              <option value={state} key={`state-${idx}`}>
                {state}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        {/* input box */}
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={values.postalCode}
        />
      </div>

      <div className="form-group">
        {/* label */}
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select
          id="country"
          name="country"
          className="form-control"
          value={values.country}
          onChange={handleChange}
        >
          {/* dropdown */}
          <option value=""> Please Select An option</option>
          {countries.map((country, idx) => {
            return (
              <option value={country} key={`countries-${idx}`}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {displayMessage && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {Object.values(values).map((value, idx) => {
              return <li key={`value-${idx}`}>{value}</li>;
            })}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
