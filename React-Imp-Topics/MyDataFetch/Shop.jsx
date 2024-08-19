import React from "react";
import { useLocation } from "react-router-dom";
import useproducts from "../DataFetch/index";
import { useMutation } from "@tanstack/react-query";

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
    return <h1 className="text-center text-xl font-semibold mt-10">Loading.....</h1>;
  }

  if (isError) {
    return <h1 className="text-center text-xl font-semibold mt-10">Error: {error.message}</h1>;
  }

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <span className="font-encode text-[80px]">{componentName}</span>
      </div>

      <div className="pb-24 font-medium flex items-center justify-center">
        <p className="text-gray-600 font-poppins text-[18px]">
          <span className="flex flex-row items-center">
            Home
            <span className="px-3 text-[20px]">&gt;</span>
            <span>{componentName}</span>
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center mb-10">
        {mutation.isLoading ? (
          <p>Adding...</p>
        ) : (
          <>
            {mutation.isError && <p>{mutation.error.message}</p>}
            {mutation.isSuccess && <p>Product Added.</p>}
            <button
              onClick={() => mutation.mutate()}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add Product
            </button>
          </>
        )}
      </div>

      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center">
          {data.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4 m-4 w-80 text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className=" w-full h-auto rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-orange-600 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
