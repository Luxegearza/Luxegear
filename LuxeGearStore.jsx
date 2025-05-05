import React from "react";

const products = [
  { id: 1, name: "Wireless Bluetooth Earphones", price: "R399" },
  { id: 2, name: "Fitness Tracker Watch", price: "R449" },
  { id: 3, name: "LED Strip Lights", price: "R299" },
  { id: 4, name: "Portable Blender Bottle", price: "R379" },
  { id: 5, name: "Mini Projector", price: "R849" },
  { id: 6, name: "Phone Camera Lens Kit", price: "R199" },
  { id: 7, name: "Resistance Bands Set", price: "R249" },
  { id: 8, name: "Collapsible Water Bottle", price: "R159" },
  { id: 9, name: "Desk Organizer Set", price: "R229" },
  { id: 10, name: "Bluetooth Sleep Mask", price: "R339" },
];

export default function LuxeGearStore() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">LuxeGear</h1>
      <p className="text-center text-lg text-gray-600 mb-6">
        Exclusive Tech Essentials for Everyday Elegance
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-2xl shadow-md p-4 border">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}