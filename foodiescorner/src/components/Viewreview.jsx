import { useState } from "react";
import { Star } from "lucide-react";

const Viewreview = () => {
  const [reviews, setReviews] = useState([
    {
      customerName: "John Doe",
      rating: 5,
      review: "Amazing food and great service! Highly recommend this place.",
      date: "2025-03-01",
    },
    {
      customerName: "Jane Smith",
      rating: 4,
      review: "Delicious meals but the service was a bit slow.",
      date: "2025-02-28",
    },
    {
      customerName: "Michael Brown",
      rating: 3,
      review: "Good food, but the ambiance could be better.",
      date: "2025-02-26",
    },
  ]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Customer Reviews & Ratings</h2>

        {reviews.length === 0 ? (
          <p className="text-center text-gray-600">No reviews available yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{review.customerName}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex items-center mt-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500" fill="currentColor" />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <Star key={i + review.rating} size={18} className="text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-700 mt-2">{review.review}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Viewreview;
