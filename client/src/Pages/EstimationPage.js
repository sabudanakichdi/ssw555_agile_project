import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function EstimationPage() {
  const [agreed, setAgreed] = useState(false);
  const handleAgree = () => {
    setAgreed(true);
  };

  const handleDisagree = () => {
    setAgreed(false);
  };

  return (
    <div class="container mx-auto flex p-5 py-24 md:flex-col flex-col items-center  min-h-screen ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Estimate :
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="block text-sm font-medium leading-6 text-gray-900 mt-2">
          Address Provided:{" "}
        </div>
        <div className="block text-sm font-medium leading-6 text-gray-900 mt-2">
          Zipcode:{" "}
        </div>
        <div className="block text-sm font-medium leading-6 text-gray-900 mt-2">
          Type Of Installation{" "}
        </div>
        <div className="block text-sm font-medium leading-6 text-gray-900 mt-2">
          Size:{" "}
        </div>
        <div className="block text-sm font-medium leading-6 text-gray-900 mt-2">
          Solar Panel Type & Charges:{" "}
        </div>

        {/* <div>
                  <label
                    htmlFor="Email
                    "
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
      
                  <div className="mt-2">
                    <input
                      id="Email"
                      name="Email"
                      type="string"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> */}
        {/* <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="number"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> */}

        <div>
          {" "}
          <div class="agreement-box lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-neutral-900">
              Agreement
            </h1>
            <p class="text-xl text-neutral-700 leading-relaxed font-medium">
              Terms And conditions{" "}
            </p>
            <div>
              <div
                className="h-60 overflow-y-scroll p-4 bg-gray-50 border border-gray-300 rounded"
                style={{ scrollbarWidth: "auto" }}
              >
                <p className="mt-1 text-center text-sm font-medium leading-9 tracking-tight text-gray-900">
                  Please Agree To The Terms and conditions to Continue
                </p>
              </div>
            </div>
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
                  to="/CustomerOnBoardingPage"
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
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
