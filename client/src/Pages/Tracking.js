import React, { useState } from "react";

function Tracking() {
  const [deliveryDate, setDeliveryDate] = useState("");

  const handleDeliveryDateChange = (event) => {
    setDeliveryDate(event.target.value);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          {" "}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter Order Id:
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="number"
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
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Enter Tracking Number:
                  </label>
                  <div className="text-sm"></div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="number"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Track
                </button>
              </div>
            </form>
          </div>
        </div>

        <h2>Order Summary</h2>
        <p>Order placed</p>
        <p>Processing</p>
        <p>Shipped</p>
        <p>Delivered</p>
        <label htmlFor="deliveryDate">Desired delivery date:</label>
        <input
          type="date"
          id="deliveryDate"
          name="deliveryDate"
          value={deliveryDate}
          onChange={handleDeliveryDateChange}
        />
      </div>
    </div>
  );
}

export default Tracking;
