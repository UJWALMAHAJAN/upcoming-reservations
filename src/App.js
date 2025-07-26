import logo from './logo.svg';
import './App.css';
import React from "react";
import ReservationCard from "./components/ReservationCard";
import reservations from "./data/reservations";

function App() {
  const handleCancel = (id) => {
    console.log("Cancel reservation:", id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
        Upcoming Reservations
      </h1>

      <div className="max-w-xl mx-auto">
        {reservations.map((reservation) => (
          <ReservationCard
            key={reservation.id}
            reservation={reservation}
            onCancel={handleCancel}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

