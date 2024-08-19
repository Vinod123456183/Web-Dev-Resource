// import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import useproducts from "../DataFetch/index";
import { useMutation } from "@tanstack/react-query";
import NewArrival from "../NewArrivals/NewArrival";

const Shop = () => {


  const location = useLocation();
  const path = location.pathname;
  const componentName = "Shop";

  const mutation = useMutation({
    mutationFn: async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "test product",
            price: 13.5,
            description: "lorem ipsum set",
            image: "https://i.pravatar.cc",
            category: "electronic",
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const json = await response.json();
        console.log(json);
        return json;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  const { isLoading, data, error, isError } = useproducts();

  if (isLoading) {
    return (
      <h1 className="text-center text-xl font-semibold mt-10">Loading.....</h1>
    );
  }

  if (isError) {
    return (
      <h1 className="text-center text-xl font-semibold mt-10">
        Error: {error.message}
      </h1>
    );
  }

  return (
    <>
      <div className="text-center mt-10 mb-5">
        <span className="font-encode text-5xl md:text-6xl lg:text-7xl">
          {componentName}
        </span>
      </div>

      <div className="pb-12 font-medium text-center">
        <p className="text-gray-600 font-poppins text-lg md:text-xl">
          <span className="flex items-center justify-center">
            Home
            <span className="px-3 text-xl">&gt;</span>
            <span>{componentName}</span>
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mx-auto px-4 md:px-8 pb-10">
        <div className=" p-4 md:p-6 w-full md:w-1/4">
          {/* Filter Section */}
          {["Category", "Color", "Size"].map((filterType, index) => (
            <div key={index} className="mb-8">
              <h3 className=" font-semibold px-2 mb-2 font-m-plus-2  text-2xl md:text-3xl whitespace-nowrap">{`Filter by ${filterType}`}</h3>
              <ul className="list-none px-2">
                {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className=" flex justify-between items-center bg-white p-[9px] mb-2 rounded-sm"
                    >
                      <span>{item}</span>
                      <div className="flex justify-center p-1  items-center rounded-full bg-fuchsia-100">
                        <span className="text-gray-500  text-xs">22</span>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          <div className=" mt-4 mb-5 px-5 py-4 rounded-md  text-2xl md:text-3xl whitespace-nowrap ">
            <NewArrival />
          </div>

          <div className=" mt-4 mb-4 px-5 py-4 rounded-md  text-2xl md:text-3xl whitespace-nowrap ">
            <span>Filter by Tag</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 px-2">
            {[
              "Coats",
              "Dresses",
              "Jackets",
              "Polyester",
              "Shirts",
              "Shorts",
              "Tops",
            ].map((tag, i) => (
              <div
                key={i}
                className="border-[1.2px] rounded-md border-gray-300 text-center py-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {data.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-xs border-[1.2px] border-gray-300 mx-auto p-8  rounded-lg bg-white flex flex-col items-center text-center justify-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[160px] h-auto rounded-md mb-4 p-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-orange-600 font-bold mb-4">${product.price}</p>
              <button className="bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-800">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
