import React from 'react';

const Menu = () => {
  return (
    <section id="menu" className="menu section py-16 bg-white">
      {/* Section Title */}
      <div className="container text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Our Menu</h2>
        <p>
          <span className="text-xl">Check Our</span>{' '}
          <span className="description-title text-2xl font-semibold">Yummy Menu</span>
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <ul className="nav nav-tabs flex justify-center space-x-6" data-aos="fade-up" data-aos-delay="100">
          <li className="nav-item">
            <a className="nav-link active show text-xl font-medium" data-bs-toggle="tab" data-bs-target="#menu-starters">
              <h4>Starters</h4>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-xl font-medium" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
              <h4>Breakfast</h4>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-xl font-medium" data-bs-toggle="tab" data-bs-target="#menu-lunch">
              <h4>Lunch</h4>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-xl font-medium" data-bs-toggle="tab" data-bs-target="#menu-dinner">
              <h4>Dinner</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content mt-8" data-aos="fade-up" data-aos-delay="200">
          {/* Starters Tab */}
          <div className="tab-pane fade active show" id="menu-starters">
            <div className="tab-header text-center mb-12">
              <p className="text-xl">Menu</p>
              <h3 className="text-2xl font-semibold">Starters</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="menu-item text-center">
                  <a href={`public/menu-item-${item}.png`} className="glightbox">
                    <img
                      src={`public/menu-item-${item}.png`}
                      alt={`Menu item ${item}`}
                      className="menu-img w-full h-auto rounded-lg shadow-lg"
                    />
                  </a>
                  <h4 className="text-xl font-semibold mt-4">Magnam Tiste</h4>
                  <p className="ingredients text-gray-600 mb-2">Lorem, deren, trataro, filede, nerada</p>
                  <p className="price text-lg font-bold">$5.95</p>
                </div>
              ))}
            </div>
          </div>

          {/* Breakfast Tab */}
          <div className="tab-pane fade" id="menu-breakfast">
            <div className="tab-header text-center mb-12">
              <p className="text-xl">Menu</p>
              <h3 className="text-2xl font-semibold">Breakfast</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="menu-item text-center">
                  <a href={`public/menu-item-${item}.png`} className="glightbox">
                    <img
                      src={`public/menu-item-${item}.png`}
                      alt={`Menu item ${item}`}
                      className="menu-img w-full h-auto rounded-lg shadow-lg"
                    />
                  </a>
                  <h4 className="text-xl font-semibold mt-4">Aut Luia</h4>
                  <p className="ingredients text-gray-600 mb-2">Lorem, deren, trataro, filede, nerada</p>
                  <p className="price text-lg font-bold">$14.95</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lunch Tab */}
          <div className="tab-pane fade" id="menu-lunch">
            <div className="tab-header text-center mb-12">
              <p className="text-xl">Menu</p>
              <h3 className="text-2xl font-semibold">Lunch</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="menu-item text-center">
                  <a href={`public/menu-item-${item}.png`} className="glightbox">
                    <img
                      src={`public/menu-item-${item}.png`}
                      alt={`Menu item ${item}`}
                      className="menu-img w-full h-auto rounded-lg shadow-lg"
                    />
                  </a>
                  <h4 className="text-xl font-semibold mt-4">Est Eligendi</h4>
                  <p className="ingredients text-gray-600 mb-2">Lorem, deren, trataro, filede, nerada</p>
                  <p className="price text-lg font-bold">$8.95</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dinner Tab */}
          <div className="tab-pane fade" id="menu-dinner">
            <div className="tab-header text-center mb-12">
              <p className="text-xl">Menu</p>
              <h3 className="text-2xl font-semibold">Dinner</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="menu-item text-center">
                  <a href={`public/menu-item-${item}.png`} className="glightbox">
                    <img
                      src={`public/menu-item-${item}.png`}
                      alt={`Menu item ${item}`}
                      className="menu-img w-full h-auto rounded-lg shadow-lg"
                    />
                  </a>
                  <h4 className="text-xl font-semibold mt-4">Eos Luibusdam</h4>
                  <p className="ingredients text-gray-600 mb-2">Lorem, deren, trataro, filede, nerada</p>
                  <p className="price text-lg font-bold">$12.95</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
