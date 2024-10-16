import React from "react";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { date, img, price, service, _id, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded h-24 w-24">
            <img src={img} alt="avatar not found" />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <span className="text-primary font-bold">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-warning btn-outline btn-xs"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
