function Home() {
  return (
    <div class="container mx-auto flex p-5 py-24 md:flex-col flex-col items-center  min-h-screen ">
      <div class="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:mb-0 items-center text-center">
        <h1 class="sm:text-5xl text-5xl font-medium title-font mb-2 text-neutral-900 ">
          Solaris Energy Group
        </h1>
        <h2 class="text-3xl text-neutral-700  font-medium title-font mb-3">
          Want to know about the company?
        </h2>
      </div>
      <div>
        {" "}
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <p className="leading-relaxed text-xl  ">
                Solaris is a cutting-edge solar management tool project that has
                been designed to revolutionize the way we manage and monitor
                solar energy systems. At Solaris, we firmly believe that solar
                energy is the future of sustainable and eco-friendly energy
                production, and we are committed to creating innovative tools
                and solutions that can help our users harness the full potential
                of solar power.
              </p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <p className="leading-relaxed text-xl ">
                We are a team of experts in solar technology, software
                development, and energy management. Our team is passionate about
                creating a more sustainable and environmentally-conscious
                future, and we believe that Solaris can be a game-changer in the
                solar energy industry. We are dedicated to providing our users
                with the best solar management tool that is reliable,
                user-friendly and can help them save energy, reduce costs, and
                increase their solar output.
              </p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <p className="leading-relaxed text-xl ">
                Join us on our journey to create a cleaner, greener, and more
                sustainable future by using Solaris - the ultimate solar
                management tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
