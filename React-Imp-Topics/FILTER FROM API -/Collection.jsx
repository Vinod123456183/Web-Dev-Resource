import React, { useState, useMemo } from "react";
// import { useLocation } from "react-router-dom";
import useproducts from "../DataFetch/index"; // Update the path to your hook

// import imageData from "../DataFetch/index2";

const Collection = () => {
  const { data: products = [], isLoading, isError, error } = useproducts();

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      products.map((product) => product.category)
    );
    return ["All", ...uniqueCategories];
  }, [products]);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory, products]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="text-center mt-10 mb-5">
        <span className="font-encode text-5xl md:text-6xl lg:text-7xl">
          Collection
        </span>
      </div>

      <div className="pb-12 font-medium text-center">
        <p className="text-gray-600 font-poppins text-lg md:text-xl">
          <span className="flex items-center justify-center">
            Home
            <span className="px-3 text-xl">&gt;</span>
            <span>Collection</span>
          </span>
        </p>
      </div>

      <div className="bg-red-200 p-4">
        <div className="flex justify-center mb-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 m-2 border rounded transition-colors ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">
              No products found for this category.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded shadow-sm">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600">{product.category}</p>
                <p className="mt-2">${product.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Collection;
