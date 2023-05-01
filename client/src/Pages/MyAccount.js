import { Link } from "react-router-dom";
import Agreement from "./Agreement";

function MyAccount() {
  return (
    <div>
      <body>
        <section class="text-gray-700 body-font min-h-screen">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <p class="text-xl text-neutral-700  font-medium title-font mb-5">
                MyAccount
              </p>
              <p>
                <Link to="/Agreement">Agreement Pages</Link>
              </p>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default MyAccount;
