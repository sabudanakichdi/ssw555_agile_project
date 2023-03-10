import Head from "next/head";
import ReactDOM from "react-dom/client";
import { BsFillMoonFill } from "react-icons/bs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Image from "next/image";
//import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Solaris Energy Group</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
      <main className=" bg-white  dark:bg-gray-900 ">
      <section className=" p-2 m-2 ">
            <div className="py-15 mb-15  flex-row-reverse dark:text-white">
              <div class="flex flex-row-reverse ...">
                <div className="m-2 p-5">
                  {" "}
                  <BsFillMoonFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </div>
                <div className="p-5 m-2">
                  {" "}
                  <Link href="/ContactUs">Contact Us</Link>
                </div>
                <div className="p-5 m-2">
                  {" "}
                  <Link href="/BookADemo">Book A Demo</Link>
                </div>
                <div className="p-5 m-2">
                  {" "}
                  <Link href="/AboutUs">About Us</Link>
                </div>
                <div className="p-5 m-2">
                  {" "}
                  <Link href="/Pricing">Pricing</Link>
                </div>
                <div className="p-5 m-2">
                  {" "}
                  <Link href="/OurWork">Our Work</Link>
                </div>
                <div className="p-5 m-2">
                  {" "}
                  <Link href="/Login">Login</Link>
                </div>
              </div>
            </div>

            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl m-2">
                Our Work
              </h2>

              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400"></div>
            </div>
          </section>
        </main>
      </nav>
    </div>
  );
}
