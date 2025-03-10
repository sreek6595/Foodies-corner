import { useState } from "react";

const RestaurantRegistration = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    cuisineType: "",
    category: "",
    openingHours: "",
    closingDays: "",
    ownerName: "",
    contactNumber: "",
    email: "",
    address: "",
    googleMapsLink: "",
    businessRegNumber: "",
    foodLicenseNumber: "",
    gstin: "",
    tradeLicense: "",
    homeDelivery: false,
    reservationRequired: false,
    menuFile: null,
    logo: null,
    coverImage: null,
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, type, checked, files, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Restaurant Registration</h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Restaurant Info */}
          {[
            { label: "Restaurant Name", name: "restaurantName", type: "text" },
            { label: "Cuisine Type", name: "cuisineType", type: "text" },
            { label: "Category", name: "category", type: "text" },
            { label: "Opening Hours", name: "openingHours", type: "text" },
            { label: "Closing Days", name: "closingDays", type: "text" },
            { label: "Owner Name", name: "ownerName", type: "text" },
            { label: "Contact Number", name: "contactNumber", type: "tel" },
            { label: "Email", name: "email", type: "email" },
            { label: "Restaurant Address", name: "address", type: "text" },
            { label: "Google Maps Link", name: "googleMapsLink", type: "url" },
            { label: "Business Registration Number", name: "businessRegNumber", type: "text" },
            { label: "Food Safety License Number", name: "foodLicenseNumber", type: "text" },
            { label: "GSTIN", name: "gstin", type: "text" },
            { label: "Trade License", name: "tradeLicense", type: "text" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              <input
                type={type}
                name={name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                onChange={handleChange}
              />
            </div>
          ))}

          {/* Checkboxes */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" name="homeDelivery" onChange={handleChange} className="w-5 h-5" />
            <label className="text-gray-700">Home Delivery Available</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" name="reservationRequired" onChange={handleChange} className="w-5 h-5" />
            <label className="text-gray-700">Reservation Required</label>
          </div>

          

          {/* Additional Notes */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">Additional Notes</label>
            <textarea
              name="additionalNotes"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button type="submit" className="w-full md:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
              Register Restaurant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantRegistration;
