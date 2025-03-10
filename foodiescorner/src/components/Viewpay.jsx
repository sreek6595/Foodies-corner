import { useState } from "react";

const ViewPay = () => {
  const [paymentData, setPaymentData] = useState([
    {
      orderId: "ORD12345",
      customerName: "John Doe",
      totalAmount: 1200,
      paymentStatus: "Completed",
      paymentMethod: "Credit Card",
      date: "2025-03-03",
    },
    {
      orderId: "ORD12346",
      customerName: "Jane Smith",
      totalAmount: 850,
      paymentStatus: "Pending",
      paymentMethod: "UPI",
      date: "2025-03-02",
    },
    {
      orderId: "ORD12347",
      customerName: "Michael Brown",
      totalAmount: 500,
      paymentStatus: "Failed",
      paymentMethod: "Cash",
      date: "2025-03-01",
    },
  ]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">View Payments</h2>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Customer Name</th>
              <th className="border border-gray-300 px-4 py-2">Total Amount (₹)</th>
              <th className="border border-gray-300 px-4 py-2">Payment Status</th>
              <th className="border border-gray-300 px-4 py-2">Payment Method</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr key={index} className="text-center bg-white">
                <td className="border border-gray-300 px-4 py-2">{payment.orderId}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.customerName}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.totalAmount}</td>
                <td className={`border border-gray-300 px-4 py-2 font-semibold ${
                    payment.paymentStatus === "Completed" ? "text-green-600" :
                    payment.paymentStatus === "Pending" ? "text-yellow-600" :
                    "text-red-600"
                  }`}>
                  {payment.paymentStatus}
                </td>
                <td className="border border-gray-300 px-4 py-2">{payment.paymentMethod}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPay;
