import React, { useState } from "react";
const CustomerOnboardingPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [squareFeet, setSquareFeet] = useState("");
  const [installationType, setInstallationType] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };
  const handleSquareFeetChange = (event) => {
    setSquareFeet(event.target.value);
  };
  const handleInstallationTypeChange = (event) => {
    setInstallationType(event.target.value);
  };
  const handleDeliveryDateChange = (event) => {
    setDeliveryDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data };
  };
  return (
    <div>
      <body>
        <section class="text-gray-700 body-font min-h-screen">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <p class="text-xl text-neutral-700  font-medium title-font mb-5">
                CustomerOnBoardingPage
              </p>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};
export default CustomerOnboardingPage;
