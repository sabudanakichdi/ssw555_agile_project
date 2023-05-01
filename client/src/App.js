// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BookADemo from "./Pages/BookADemo";
import AboutUs from "./Pages/AboutUs";
import Pricing from "./Pages/Pricing";
import NoMatch from "./Pages/NoMatch";
import OurWork from "./Pages/OurWork";
import MyAccount from "./Pages/MyAccount";
import Agreement from "./Pages/Agreement";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import CustomerInstallationPage from "./Pages/CustomerInstallationPage";
import "./App.css";
import "./index.css";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/BookADemo" element={<BookADemo />} />
        <Route path="/OurWork" element={<OurWork />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/Agreement" element={<Agreement />} />
        <Route
          path="/CustomerInstallationPage"
          element={<CustomerInstallationPage />}
        />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
