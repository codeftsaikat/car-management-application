import React from "react";
import { ArrowRight } from "lucide-react";

const Service = ({ service }) => {
  const { title, img, price, description } = service;

  return (
    <div>
      <div className="card h-[340px] rounded-lg shadow-xl border-1 border-gray-400 p-5 bg-gray-100 mt-5">
        <div>
          <img className="rounded-lg w-full h-52" src={img} alt="image loading" />
        </div>
        <h2 className="text-3xl font-semibold text-black mb-2 mt-1">{title}</h2>
        <div className="flex justify-between">
          <p className="text-xl font-medium text-red-500">Price: ${price}</p>
          <ArrowRight className="cursor-pointer" color="red" />
        </div>
      </div>
    </div>
  );
};

export default Service;
