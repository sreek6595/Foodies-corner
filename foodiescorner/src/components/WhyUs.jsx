import React from 'react';

const WhyUs = () => {
  return (
    <>
      {/* Why Us Section */}
      <section id="why-us" className="bg-light py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Why Choose Yummy */}
            <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/3" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Yummy</h3>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <a href="#" className="text-red-500 font-semibold hover:text-red-700 flex items-center justify-center">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Icon Boxes */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Icon Box 1 */}
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-clipboard-data text-red-500 text-3xl mb-4" />
                <h4 className="text-lg font-semibold">Corporis voluptates officia eiusmod</h4>
                <p className="text-gray-600 mt-2">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              {/* Icon Box 2 */}
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-gem text-red-500 text-3xl mb-4" />
                <h4 className="text-lg font-semibold">Ullamco laboris ladore lore pan</h4>
                <p className="text-gray-600 mt-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
              {/* Icon Box 3 */}
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-inboxes text-red-500 text-3xl mb-4" />
                <h4 className="text-lg font-semibold">Labore consequatur incidid dolore</h4>
                <p className="text-gray-600 mt-2">Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="bg-dark py-16">
        <img src="assets/img/stats-bg.jpg" alt="Stats Background" className="absolute inset-0 object-cover w-full h-full opacity-30" data-aos="fade-in" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Stats Item 1 */}
            <div className="stats-item text-center w-full h-full" data-aos="fade-up" data-aos-delay="100">
              <span className="text-4xl font-bold text-white block">232</span>
              <p className="text-white">Clients</p>
            </div>
            {/* Stats Item 2 */}
            <div className="stats-item text-center w-full h-full" data-aos="fade-up" data-aos-delay="200">
              <span className="text-4xl font-bold text-white block">521</span>
              <p className="text-white">Projects</p>
            </div>
            {/* Stats Item 3 */}
            <div className="stats-item text-center w-full h-full" data-aos="fade-up" data-aos-delay="300">
              <span className="text-4xl font-bold text-white block">1453</span>
              <p className="text-white">Hours Of Support</p>
            </div>
            {/* Stats Item 4 */}
            <div className="stats-item text-center w-full h-full" data-aos="fade-up" data-aos-delay="400">
              <span className="text-4xl font-bold text-white block">32</span>
              <p className="text-white">Workers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
