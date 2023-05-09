import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../serverrequest";

// export const CustomerIdContext = createContext(null);

function OnBoarding() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [state, setState] = useState("");
  const [county, setCounty] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [contact, setContact] = useState("");
  const [dod, setDod] = useState("");
  const [install, setInstall] = useState("");
  const [area, setArea] = useState("");
  // var cardNumber = ""
  // let customerForm = document.getElementById("customerForm");
  // customerForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  // });

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailIdChange = (e) => {
    setEmailId(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handleCountyChange = (e) => {
    setCounty(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
  };
  const handleContactChange = (e) => {
    setContact(e.target.value);
  };
  const handleInstallChange = (e) => {
    setInstall(e.target.value);
  };
  const handleDodChange = (e) => {
    setDod(e.target.value);
  };
  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(install);
    if (
      firstName === "" &&
      lastName === "" &&
      contact === "" &&
      emailId === "" &&
      address === "" &&
      county === "" &&
      state === "" &&
      zipcode === "" &&
      install === "" &&
      dod === "" &&
      area === ""
    ) {
      return;
    }
    // handle form submission here
    try {
      const response = await axios.post(
        `${BASE_URL}/api/customerdetails/`,
        {
          first_name: firstName,
          last_name: lastName,
          contact: contact,
          address: address,
          zipcode: zipcode,
          country: "USA",
          state: state,
          county: county,
          area: area,
          type_of_installation: install,
          delivery_date: dod,
          isEdit: "N",
          email_id: emailId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log("response", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.log(error);
      // handle error
    }
  };

  return (
    <div class="container mx-auto flex p-5 py-24 md:flex-col flex-col items-center  min-h-screen ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Customer OnBoarding
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" id="customerForm">
          <div>
            <div>
              <label
                htmlFor="First Name"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                First Name
              </label>

              <div className="mt-2">
                <input
                  id="First Name"
                  name="First Name"
                  type="string"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  autoComplete="First Name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="First Name"
                className="block text-xl font-medium leading-6 text-gray-900 mt-2"
              >
                Last Name
              </label>

              <div className="mt-2">
                <input
                  id="Second Name"
                  name="Second Name"
                  type="string"
                  value={lastName}
                  onChange={handleLastNameChange}
                  autoComplete="Second Name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="Order-id"
              className="block text-xl font-medium leading-6 text-gray-900"
            >
              Email-id
            </label>

            <div className="mt-2">
              <input
                id="Email-idd"
                name="Email-id"
                type="String"
                value={emailId}
                onChange={handleEmailIdChange}
                autoComplete=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm  sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="State"
              className="block text-xl font-medium leading-6 text-gray-900"
            >
              State
            </label>

            <div className="mt-2">
              <input
                id="State"
                name="State"
                type="String"
                value={state}
                onChange={handleStateChange}
                autoComplete=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="County"
              className="block text-xl font-medium leading-6 text-gray-900"
            >
              County
            </label>

            <div className="mt-2">
              <input
                id="County"
                name="County"
                type="String"
                value={county}
                onChange={handleCountyChange}
                autoComplete=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div>
              <label
                htmlFor="Address"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Address
              </label>

              <div className="mt-2">
                <input
                  id="Address"
                  name="Address"
                  type="string"
                  value={address}
                  onChange={handleAddressChange}
                  autoComplete="Address"
                  required
                  className="block w-full h-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="area"
              className="block text-xl font-medium leading-6 text-gray-900"
            >
              Area
            </label>
            <div className="mt-2">
              <input
                id="area"
                name="area"
                type="number"
                value={area}
                onChange={handleAreaChange}
                autoComplete=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="zipcode"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Zipcode
              </label>
              <input
                id="zipcode"
                name="zipcode"
                type="number"
                value={zipcode}
                onChange={handleZipcodeChange}
                autoComplete=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Contact Number"
              className="block text-xl font-medium leading-6 text-gray-900"
            >
              Contact Number
            </label>

            <div className="mt-2">
              <input
                id="Contact Number"
                name="Contact Number"
                type="number"
                value={contact}
                onChange={handleContactChange}
                autoComplete=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-2">
            <label
              htmlFor="First Name"
              className="block text-xl font-medium leading-6 text-gray-900 mt-2"
            >
              Installation Type
            </label>
            <div>
              <input
                id="default-radio-1"
                type="radio"
                value="Full House Roof Installation"
                onChange={handleInstallChange}
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ml-2 mt-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Full House Roof Installation
              </label>
            </div>
            <div>
              <input
                id="default-radio-1"
                type="radio"
                value="Hybrid House Roof Installation"
                onChange={handleInstallChange}
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ml-2 mt-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Hybrid House Roof Installation
              </label>
            </div>
            <div>
              <input
                id="default-radio-1"
                type="radio"
                value="Out of House Roof Installation"
                onChange={handleInstallChange}
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ml-2 mt-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Out of House Roof Installation
              </label>
            </div>
          </div>
          <div>
            <div>
              <label
                htmlFor="Company"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Estimated Date Of Delivery:
              </label>

              <div className="mt-2">
                <input
                  id="Size"
                  name="Size"
                  type="date"
                  value={dod}
                  onChange={handleDodChange}
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none rounded ml-4"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default OnBoarding;
