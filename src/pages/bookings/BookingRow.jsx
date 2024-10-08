import React from "react";

const BookingRow = ({ booking }) => {
  const { date, img, price, service } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded h-24 w-24">
            <img src={img} alt="avatar not found" />
          </div>
        </div>
      </td>
      <td>
        <td>{service}</td>
      </td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
