import React, { useState } from "react";

const FilterProducts = ({
  filterByCategory,
  filterByPrice,
  setFilteredProducts,
  allProductsPrices,
}) => {
  const [price, setPrice] = useState(0);

  const handleOnChange = (e) => {
    setPrice(e.target.value);
    filterByPrice(e.target.value);
  };

  const minPrice = Math.min(...allProductsPrices);
  const maxPrice = Math.max(...allProductsPrices);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="underline font-semibold text-2xl">Filter</h1>

      <div>
        <h2 className="mb-3 text-lg font-medium">Category</h2>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setFilteredProducts([])}
            className="btn w-40 normal-case bg-transparet"
          >
            All
          </button>
          <button
            onClick={(e) => filterByCategory(e.target.value)}
            value="smartphones"
            className="btn w-40 normal-case bg-transparent"
          >
            Smart Phones
          </button>
          <button
            onClick={(e) => filterByCategory(e.target.value)}
            value="laptops"
            className="btn w-40 normal-case bg-transparent"
          >
            Laptops
          </button>
          <button
            onClick={(e) => filterByCategory(e.target.value)}
            value="fragrances"
            className="btn w-40 normal-case bg-transparent"
          >
            Fragrances
          </button>
          <button
            onClick={(e) => filterByCategory(e.target.value)}
            value="skincare"
            className="btn w-40 normal-case bg-transparent"
          >
            Skincare
          </button>
          <button
            onClick={(e) => filterByCategory(e.target.value)}
            value="groceries"
            className="btn w-40 normal-case bg-transparent"
          >
            Groceries
          </button>
          <button
            onClick={(e) => filterByCategory(e.target.value)}
            value="home-decoration"
            className="btn w-40 normal-case bg-transparent"
          >
            Decoration
          </button>
        </div>
      </div>

      <div>
        <div className="divider"></div>
        <h2 className="mb-3 text-lg font-medium">Price</h2>
        <div className="flex flex-col gap-2">
          <input
            onChange={handleOnChange}
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="range range-xs"
          />
          <p className="font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
