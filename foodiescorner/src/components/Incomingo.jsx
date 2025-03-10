import { useState } from "react";

const Incomingo = () => {
  // Sample data (replace with actual data from API or state)
  const [orders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      contactNumber: "9876543210",
      email: "john@example.com",
      address: "123 Main St, City",
      orderItems: "Pizza, Burger, Coke",
      totalAmount: "500",
      paymentStatus: "Completed",
      deliveryOption: "Delivery",
      specialInstructions: "Extra cheese on pizza",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      contactNumber: "9123456789",
      email: "jane@example.com",
      address: "456 Elm St, City",
      orderItems: "Pasta, Salad, Lemonade",
      totalAmount: "350",
      paymentStatus: "Pending",
      deliveryOption: "Pickup",
      specialInstructions: "No onions in salad",
    },
  ]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Incoming Orders</h2>

        {orders.length === 0 ? (
          <p className="text-gray-600 text-center">No incoming orders.</p>
        ) : (
          <div className="grid gap-6">
            {orders.map((order) => (
              <div key={order.id} className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800">Order #{order.id}</h3>
                <p><strong>Customer:</strong> {order.customerName}</p>
                <p><strong>Contact:</strong> {order.contactNumber}</p>
                <p><strong>Email:</strong> {order.email}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>Items:</strong> {order.orderItems}</p>
                <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
                <p><strong>Payment Status:</strong> <span className={order.paymentStatus === "Completed" ? "text-green-600" : "text-red-600"}>{order.paymentStatus}</span></p>
                <p><strong>Delivery Option:</strong> {order.deliveryOption}</p>
                {order.specialInstructions && <p><strong>Instructions:</strong> {order.specialInstructions}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Incomingo;
