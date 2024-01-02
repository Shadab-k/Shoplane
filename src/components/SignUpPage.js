import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = [
    {
      name: "India",
      states: [
        {
          name: "UP",
          cities: [
            "kanpur",
            "Rae-bareli",
            "Jhansi",
            "Unnao",
            "Badaun",
            "Mathura",
            "Agra",
            "Tejjpur",
            "Lucknow",
            "Etawa",
            "Shamli",
            "Firozabad",
          ],
        },
        {
          name: "Delhi",
          cities: ["New Delhi", "Old Delhi"],
        },
        {
          name: "Rajasthan",
          cities: [
            "Jaipur",
            "Udaipur",
            "Jodhpur",
            "Jaisalmer",
            "BikanerPushkar",
            "Ajmer",
          ],
        },
        {
          name: "Bihar",
          cities: ["Patna", "Bodhgaya", "Jharkhand", "Ranchi", "Begusarai"],
        },
        {
          name: "Tamil Nadu",
          cities: ["Ooty", "Kanya Kumari", "Madurai", "Coimbatore", "Kochi"],
        },
        {
          name: "Andhra Pradesh",
          cities: ["Tirupati", "Vijayvada", "Guntur", "Vishakhapatnam"],
        },
        {
          name: "Manipur",
          cities: ["Imphal"],
        },
        {
          name: "Arunachal Pradesh",
          cities: [
            "Itanagar",
            "Assam",
            "Manipur",
            "Mighalaya",
            "Mizoram",
            "Nagaland",
            "Sikkim",
          ],
        },
      ],
    },

    {
      name: "Canada",
      states: [
        {
          name: "Toronto",
          cities: ["East York", "Hamilton", "Markham", "Niagara Fall"],
        },
        {
          name: "Ontario",
          cities: [
            "oottawa",
            "Pelee Island",
            "West Nipissing",
            "York University",
            "Thorold",
          ],
        },
      ],
    },
    {
      name: "USA",
      states: [
        {
          name: "California",
          cities: [
            "Sacramento",
            "Los-Angeles",
            "Mount Dana",
            "San Francisco",
            "Napa",
            "Hollywood",
          ],
        },
        {
          name: "Texas",
          cities: [
            "Austin",
            "Dallas",
            "Hoston",
            "San Antonio",
            "Corpos Christie",
            "Al Paso",
          ],
        },
        {
          name: "Florida",
          cities: [
            "Miami",
            "Tampa",
            "Orelando",
            "Britanica",
            "Melbourne",
            "Cape Coral",
            "Jack Ville",
          ],
        },
        {
          name: "Hawaii",
          cities: ["Maui", "Honolulu"],
        },
        {
          name: "Alaska",
          cities: ["Anchorage", "Juneau", "Citka", "ketchikan"],
        },
      ],
    },
    {
      name: "Denmark",
      states: [
        {
          name: "Copenhagen",
          cities: ["zeeland", "Tivoli", "New York"],
        },

        {
          name: "Arhus",
          cities: ["New York "],
        },

        {
          name: "odense",
          cities: ["Islands"],
        },
      ],
    },
    {
      name: "Sweden",
      states: [
        {
          name: "Gotham Berg",
          cities: ["Gotham Berg City", "Gotham Berg OldTown", "Coastal City"],
        },
        {
          name: "StockHolm",
          cities: ["Upsala", "vaxholm", "Nakka", "Macka", "boo", "Vasteras"],
        },
      ],
    },
  ];

  const handleOnCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleOnStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
    setSelectedCity("");
  };

  const handleOnCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
  };

  const selectedCountryObject = countries.find(
    (country) => country.name === selectedCountry
  );
  const states = selectedCountryObject ? selectedCountryObject.states : [];
  const selectedStateObject = states.find(
    (state) => state.name === selectedState
  );
  const cities = selectedStateObject ? selectedStateObject.cities : [];

  return (
    <div className="ml-5 mx-5 my-4 container">
      <div className="row g-3 justify-content-end">
        <form className="col-md-8 needs-validation" noValidate>
          <Link to="/login">
            <button
              style={{ borderRadius: "10rem" }}
              type="button"
              className="btn btn-success btn-lg"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              style={{ borderRadius: "10rem" }}
              type="button"
              className="btn btn-success btn-lg"
            >
              SignUp
            </button>
          </Link>
          <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
             placeholder="First name"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Last name"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="my-2 col-md-4 form-floating">
            Address:
            <label htmlFor="floatingTextarea"></label>
            <textarea
              className="form-control"
              placeholder="Write here: /"
              id="floatingTextarea"
            ></textarea>
          </div>
          <div className="col-md-8">
            <label htmlFor="validationCustom04" className="form-label">
              Country
            </label>
            <select
              className="form-select"
              id="validationCustom04"
              value={selectedCountry}
              onChange={handleOnCountryChange}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationCustom04" className="form-label">
              State
            </label>
            <select
              className="form-select"
              id="validationCustom04"
              value={selectedState}
              onChange={handleOnStateChange}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              {states.map((state, index) => (
                <option key={index} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationCustom04" className="form-label">
              City
            </label>
            <select
              className="form-select"
              id="validationCustom04"
              value={selectedCity}
              onChange={handleOnCityChange}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">Please select a valid city.</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationCustom05" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom05"
              required
            />
            <div className="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="my-3 btn btn-primary" type="submit">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
