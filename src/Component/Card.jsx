import React from "react";

export default function Card({ title, description, image ,onaddcart }) {

    

  return (
    
    <div className=" shadow-lg rounded-xl p-5 w-64">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-3">{title}</h2>
      <p className="text-gray-600 text-sm mt-2">{description}</p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" onClick={onaddcart} >add to cart</button>
    </div>
  );
}
