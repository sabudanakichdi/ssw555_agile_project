export default function Tracking() {
  return (
    <div class="container mx-auto flex p-5 py-24 md:flex-col flex-col items-center  min-h-screen ">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center ">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-neutral-900">
          Tracking
        </h1>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

function Tracking() {
  const [deliveryDate, setDeliveryDate] = useState('');

  const handleDeliveryDateChange = (event) => {
    setDeliveryDate(event.target.value);
  };

  return (
    <div>
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
  );
}

export default Tracking;
