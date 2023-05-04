import { useState } from "react";

import { createContext } from "react";

export const CustomerIdContext = createContext(null);

export const CustomerIdProvider = ({ children }) => {
  const [customerId, setCustomerId] = useState("");

  return (
    <CustomerIdContext.Provider value={{ customerId, setCustomerId }}>
      {children}
    </CustomerIdContext.Provider>
  );
};

function OnBoarding() {
  return (
    <div class="container mx-auto flex p-5 py-24 md:flex-col flex-col items-center  min-h-screen ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Customer OnBoarding
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
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
              Order-id
            </label>

            <div className="mt-2">
              <input
                id="Order-id"
                name="Order-id"
                type="String"
                autoComplete=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm  sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Customer-id"
              className="block text-xl font-medium leading-6 text-gray-900"
            >
              Customer-id
            </label>

            <div className="mt-2">
              <input
                id="Customer-id"
                name="Customer-id"
                type="String"
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
                  autoComplete="Address"
                  required
                  className="block w-full h-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
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
                autoComplete=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
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
                value=""
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
                value=""
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
                value=""
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
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default OnBoarding;
