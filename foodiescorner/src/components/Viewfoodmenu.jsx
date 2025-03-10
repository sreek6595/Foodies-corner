import React from "react";

const Viewfoodmenu = ({ food }) => {
  if (!food) {
    return <p className="text-center text-red-500">No food details available.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Food Menu</h2>
      
      <div className="border p-4 rounded-md">
        {food.image ? (
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
        ) : (
          <p className="text-gray-500 text-center">No Image Available</p>
        )}
        
        <h3 className="text-xl font-semibold">{food.name || "N/A"}</h3>
        <p className="text-gray-600">{food.description || "No description available."}</p>

        <div className="mt-3">
          <span className="font-semibold">Price:</span> ₹{food.price || "N/A"}
        </div>

        <div className="mt-2">
          <span className="font-semibold">Category:</span> {food.category || "N/A"}
        </div>

        {food.additionalNote && (
          <div className="mt-2">
            <span className="font-semibold">Additional Note:</span> {food.additionalNote}
          </div>
        )}
      </div>
    </div>
  );
};

export default Viewfoodmenu;
