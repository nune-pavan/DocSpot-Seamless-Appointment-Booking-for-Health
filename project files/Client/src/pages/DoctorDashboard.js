import React, { useState } from "react";

const dummyAppointments = [
  {
    id: 1,
    name: "Rahul Sharma",
    date: "2025-06-26 10:00",
    phone: "9876543210",
    document: "doc-link-1",
    status: "pending",
  },
  {
    id: 2,
    name: "Priya Verma",
    date: "2025-06-27 14:30",
    phone: "9123456780",
    document: "",
    status: "pending",
  },
  {
    id: 3,
    name: "Amit Singh",
    date: "2025-06-28 12:00",
    phone: "9000000000",
    document: "doc-link-3",
    status: "pending",
  },
  {
    id: 4,
    name: "Neha Patil",
    date: "2025-06-28 15:15",
    phone: "8888888888",
    document: "",
    status: "pending",
  },
  {
    id: 5,
    name: "Karan Mehta",
    date: "2025-06-29 17:00",
    phone: "9871234567",
    document: "doc-link-5",
    status: "pending",
  },
  {
    id: 6,
    name: "Sneha Iyer",
    date: "2025-07-01 09:00",
    phone: "8765432109",
    document: "",
    status: "pending",
  },
  {
    id: 7,
    name: "Rohit Kumar",
    date: "2025-07-02 11:30",
    phone: "9834567890",
    document: "doc-link-7",
    status: "pending",
  },
  {
    id: 8,
    name: "Anjali Das",
    date: "2025-07-03 13:45",
    phone: "9123450987",
    document: "",
    status: "pending",
  },
];

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState(dummyAppointments);

  const handleApprove = (id) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: "approved" } : appt
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-2 text-center text-webred">
        Doctor Dashboard
      </h1>
      <p className="text-xl text-center text-gray-700 mb-6">👋 Hello, Doctor</p>
      <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-2xl mb-4 font-semibold text-gray-700">All Appointments</h2>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-webnavyblue text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Date of Appointment</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Document</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-t">
                <td className="p-3">{appt.name}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.phone}</td>
                <td className="p-3">
                  {appt.document ? (
                    <a href="#" className="text-blue-600 underline">
                      View Document
                    </a>
                  ) : (
                    "No document"
                  )}
                </td>
                <td className="p-3 capitalize">{appt.status}</td>
                <td className="p-3">
                  {appt.status === "pending" ? (
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded"
                      onClick={() => handleApprove(appt.id)}
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-green-600 font-semibold">Approved</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorDashboard;
