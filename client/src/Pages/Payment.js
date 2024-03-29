import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../serverrequest";
export default function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (cardNumber === '' && expiryDate === '' && cvv === '' && email === ''
        && address === '' && city === '' && state === '' && zipCode === '') {
        return
    }
    // handle form submission here
    try {
        const response = await axios.put(
            `${BASE_URL}/api/isPayment/`,
            {
                customer_id: localStorage.getItem("customerID"),
                isPayment: "Y",
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem("token"),
                },
            }
        );
        console.log("response", response.data);
        navigate("/Tracking");
    } catch (error) {
        console.log(error);
        // handle error
    }
  };
  return (
    <>
      <div class="container px-5 py-24 mx-auto">
        <h2 className="mt-5 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
          Payment
        </h2>
      </div>
      <div class="container mx-auto flex p-5 py-24 md:flex-col flex-col items-center  min-h-screen ">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-xl">
              <label htmlFor="cardNumber">Card Number : </label>
              <input
                type="number"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                autoComplete="cc-number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
              />
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-xl">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="date"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder="MM/YY"
                autoComplete="cc-exp"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-xl">
              <label htmlFor="cvv">CVV</label>
              <input
                type="password"
                id="cvv"
                value={cvv}
                onChange={handleCvvChange}
                placeholder="123"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-xl">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="example@example.com"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-xl">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                placeholder="123 Main St"
                autoComplete="address-line1"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-xl">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleCityChange}
                placeholder="New York"
                autoComplete="address-level2"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-xl">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={handleStateChange}
                placeholder="NY"
                autoComplete="address-level1"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-xl">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="number"
                id="zipCode"
                value={zipCode}
                onChange={handleZipCodeChange}
                placeholder="10001"
                autoComplete="postal-code"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full text-xl justify-center rounded-md bg-indigo-600 mt-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <Link
                  to="/Tracking"
                  className="font-semibold leading-6 text-white-600 "
                >
                  Pay Now
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
