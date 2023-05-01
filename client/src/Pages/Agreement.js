import { useState } from "react";
import { Link } from "react-router-dom";

function Agreement() {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
  };

  const handleDisagree = () => {
    setAgreed(false);
  };

  return (
    <div class="container mx-auto flex p-5 py-24 md:flex-col flex-col items-center min-h-screen">
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
            <p>Place</p>
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
              to="/CustomerInstallationPage"
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
  );
}

export default Agreement;
