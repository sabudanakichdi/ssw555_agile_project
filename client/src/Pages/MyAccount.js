import { Link } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../serverrequest";

export const EmailContext = createContext();

function MyAccount() {
  const [userType, setUserType] = useState("sales");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      const response = await axios.post(
        `${BASE_URL}/api/login`,
        {
          email_id: email.value,
          password: password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response.data);
      const token = response.data.token; // Extract token from response data
      console.log(token);
      localStorage.setItem("token", response.data.token);
      // redirect to home page or do something else on success
    } catch (error) {
      console.log(error);
      // display error message to the user
    }
  };

  return (
    <div>
      <body>
        <section className="text-gray-700 body-font min-h-screen">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <p className="text-5xl text-neutral-700 font-medium title-font mb-10">
                My Account
              </p>
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xl font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-xl">
                    <a
                      href="{somevalidinput}"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-xl text-gray-500">
              Don't Have An Account?
              <Link
                to="/Signup"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign Up Here
              </Link>
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center mr-4">
              <input
                id="sales"
                name="userType"
                type="radio"
                value="sales"
                checked={userType === "sales"}
                onChange={handleUserTypeChange}
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                htmlFor="sales"
                className="ml-2 block text-xl font-medium leading-5 text-gray-900"
              >
                <Link to="/OnBoarding"> Sales</Link>
              </label>
            </div>
            {/* rest of the code */}

            <div className="flex items-center">
              <input
                id="management"
                name="userType"
                type="radio"
                value="management"
                checked={userType === "management"}
                onChange={handleUserTypeChange}
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                htmlFor="management"
                className="ml-2 block text-xl font-medium leading-5 text-gray-900"
              >
                <Link to="/EstimationPage">Customer</Link>
              </label>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default MyAccount;
