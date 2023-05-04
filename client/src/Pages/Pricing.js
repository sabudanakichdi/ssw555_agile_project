import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div>
      <body>
        <section class="text-gray-700 body-font min-h-screen">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <p class="text-xl text-neutral-700  font-medium title-font mb-5">
                Have Questions about how much would it cost?
              </p>
              <div>
                <Link to="/ContactUs">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Contact US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Pricing;
