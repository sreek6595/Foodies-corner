import { useState } from "react";

const Addmenu = () => {
  const [formData, setFormData] = useState({
    foodName: "",
    description: "",
    price: "",
    category: "",
    isVegetarian: false,
    isAvailable: true,
    image: null,
    note: "",
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
    console.log("Food Menu Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Add Food Menu</h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Food Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Food Name</label>
            <input
              type="text"
              name="foodName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              name="description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <select
              name="category"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Starter">Starter</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverage">Beverage</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Food Image</label>
            <input type="file" name="image" className="w-full border border-gray-300 rounded-lg p-3" onChange={handleChange} />
          </div>

          {/* Note Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Additional Note</label>
            <textarea
              name="note"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
              Add Menu Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addmenu;
