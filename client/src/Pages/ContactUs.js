function ContactUs() {
  return (
    <div class="container mx-auto flex p-5 py-24 md:flex-col flex-col items-center  min-h-screen ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Contact Sales
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div>
              <label
                htmlFor="First Name"
                className="block text-sm font-medium leading-6 text-gray-900"
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
                className="block text-sm font-medium leading-6 text-gray-900 mt-2"
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
              htmlFor="Company"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company
            </label>

            <div className="mt-2">
              <input
                id="Company"
                name="Company"
                type="string"
                autoComplete=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
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
          </div>
          <div>
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
          </div>

          <div>
            <div>
              <label
                htmlFor="Message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>

              <div className="mt-2">
                <input
                  id="Message"
                  name="Message"
                  type="string"
                  autoComplete="Message"
                  required
                  className="block w-full h-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's Talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactUs;
