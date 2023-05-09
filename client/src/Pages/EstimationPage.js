import React from "react";
import { useState,useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../serverrequest";

export default function EstimationPage() {
  const [agreed, setAgreed] = useState(false);
  //const { token } = useContext(AuthContext)
  // const [customerID, setCustomerID] = useState("");
  const [data, setData] = useState([]);
  //const [customerData, setCustomerData] = useState({});
  console.log(localStorage.getItem("token"));
  console.log(localStorage.getItem("email"));

  
  
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/customerdetails`, {
        params: {
          email_id: localStorage.getItem("email"),
        },
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((responsecust) => {
        console.log(responsecust.data.customer);
        setData(responsecust.data.customer);
        console.log(data)
      })
      // console.log(setCustomerData)
      .catch((error) => console.log(error));
  }, []);

  const handleAgree = () => {
    setAgreed(true);
  };

  const handleDisagree = () => {
    setAgreed(false);
  };

  return (
    <div class="container mx-auto flex p-5 py-24 md:flex-col flex-col items-center  min-h-screen ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
          Estimation :
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
        First Name: {data.first_name}
        </div>
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Last Name: {data.last_name}
        </div>
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Order-id: {data.salesId}
        </div>
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Customer -id:{data.customer_id}
        </div>
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Address Provided:{data.address}
        </div>
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Zipcode:{data.zipcode}
        </div>
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Type Of Installation{data.type_of_installation}
        </div>
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Installation Charges:{data.installation_charges}
        </div>
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Solar Panel Charges:{data.solar_panel_charges}
        </div>
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Taxes:{data.tax}
        </div>
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Grand-Total:{data.grandTotal}
        </div>
        {/* <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Payment:{data.first_name}
        </div> */}
        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Date of Delivery:{data.delivery_date}
        </div>

        <div className="block text-xl font-medium leading-6 text-gray-900 mt-2">
          Solar Panel Type:{data.type_of_installation}
          <div class="flex items-center justify-center mt-10">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-neutral-600"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span class="ml-2 text-neutral-700 font-medium">
                I agree to the terms and conditions
              </span>
            </label>
            {agreed && (
              <Link
                to="/Agreement"
                class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none rounded ml-4"
              >
                Continue
              </Link>
            )}
            {agreed && (
              <button
                class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none rounded ml-4"
                onClick={handleDisagree}
              >
                Disagree
              </button>
            )}
            <p>
              <Link to="/Agreement"></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
