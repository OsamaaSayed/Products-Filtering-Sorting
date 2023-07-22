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

  const btnsArr = [
    {
      id: 1,
      label: "Smart Phones",
      value: "smartphones",
      handleClick: (e) => {
        filterByCategory(e.target.value);
      },
    },
    {
      id: 2,
      label: "Laptops",
      value: "laptops",
      handleClick: (e) => {
        filterByCategory(e.target.value);
      },
    },
    {
      id: 3,
      label: "Fragrances",
      value: "fragrances",
      handleClick: (e) => {
        filterByCategory(e.target.value);
      },
    },
    {
      id: 4,
      label: "Skincare",
      value: "skincare",
      handleClick: (e) => {
        filterByCategory(e.target.value);
      },
    },
    {
      id: 5,
      label: "Groceries",
      value: "groceries",
      handleClick: (e) => {
        filterByCategory(e.target.value);
      },
    },
    {
      id: 6,
      label: "Decoration",
      value: "home-decoration",
      handleClick: (e) => {
        filterByCategory(e.target.value);
      },
    },
  ];

  return (
    <div className="flex flex-col gap-5 2xs:justify-center 2xs:items-center md:items-start">
      <h1 className="border-b py-1 font-semibold text-2xl w-full 2xs:text-left">
        Filter
      </h1>

      <div>
        <h2 className="mb-3 text-lg font-medium">Category</h2>
        <div className="flex gap-2 2xs:flex-row 2xs:flex-wrap  md:flex-col ">
          <button
            onClick={() => setFilteredProducts([])}
            className="btn w-40 normal-case bg-transparet"
          >
            All
          </button>
          {btnsArr.map((btn) => (
            <button
              key={btn.id}
              onClick={btn.handleClick}
              value={btn.value}
              className="btn w-40 normal-case bg-transparent"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full">
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
