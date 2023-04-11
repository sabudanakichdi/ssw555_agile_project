import Head from "next/head";
import ReactDOM from "react-dom/client";
import { BsFillMoonFill } from "react-icons/bs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <div className="py-10 mb-12  flex-row-reverse dark:text-white">
              <div class="flex flex-row-reverse ...">
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
              <h2 className="text-3xl py-2 text-blue-500  font-medium dark:text-blue-500  md:text-3xl m-2">
                Contact Us
              </h2>

              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400"></div>
            </div>
          </section>
          <div>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          CATEGORY
                        </h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                          Any Problems and Queires!
                        </h1>
                        <p class="leading-relaxed mb-3">
                          Queries answered immeadiatly.
                          contact us on +(1)********** and Email: ***********@gmail.com
                        </p>
                        <div class="flex items-center flex-wrap ">
                          <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </nav>
      <div>


      </div>
    </div>
  );
}