import React from "react";

const Restaurantview = ({ restaurant }) => {
  if (!restaurant) {
    return <p>No restaurant details available.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">{restaurant.name}</h2>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <p><strong>Cuisine Type:</strong> {restaurant.cuisineType}</p>
        <p><strong>Category:</strong> {restaurant.category}</p>
        <p><strong>Opening Hours:</strong> {restaurant.openingHours}</p>
        <p><strong>Closing Days:</strong> {restaurant.closingDays}</p>
        <p><strong>Owner Name:</strong> {restaurant.ownerName}</p>
        <p><strong>Contact Number:</strong> {restaurant.contactNumber}</p>
        <p><strong>Email:</strong> {restaurant.email}</p>
        <p><strong>Address:</strong> {restaurant.address}</p>
        <p><strong>Google Maps Link:</strong> <a href={restaurant.googleMapsLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">View on Map</a></p>
        <p><strong>Business Registration Number:</strong> {restaurant.businessRegNumber}</p>
        <p><strong>Food Safety License Number:</strong> {restaurant.foodSafetyLicense}</p>
        <p><strong>GSTIN:</strong> {restaurant.gstin}</p>
        <p><strong>Trade License:</strong> {restaurant.tradeLicense}</p>
      </div>
      <div className="mt-4">
        <p><strong>Home Delivery Available:</strong> {restaurant.homeDelivery ? "Yes" : "No"}</p>
        <p><strong>Reservation Required:</strong> {restaurant.reservationRequired ? "Yes" : "No"}</p>
      </div>
      <div className="mt-4">
        <p><strong>Additional Notes:</strong> {restaurant.additionalNotes || "N/A"}</p>
      </div>
    </div>
  );
};

export default Restaurantview;
