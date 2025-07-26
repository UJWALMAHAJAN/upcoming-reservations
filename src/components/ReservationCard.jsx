import React from "react";

const ReservationCard = ({ reservation, onCancel }) => {
  const { id, venueName, date, time, partySize, status } = reservation;

  const statusColor = status === "Confirmed" ? "text-green-600" : "text-yellow-500";

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
      <h2 className="text-xl font-semibold text-blue-700">{venueName}</h2>
      <p className="text-sm">📅 Date: {date}</p>
      <p className="text-sm">⏰ Time: {time}</p>
      <p className="text-sm">👥 Party Size: {partySize}</p>
      <p className={`text-sm font-bold ${statusColor}`}>{status}</p>
      <button
        onClick={() => onCancel(id)}
        className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all"
      >
        Cancel
      </button>
    </div>
  );
};

export default ReservationCard;
