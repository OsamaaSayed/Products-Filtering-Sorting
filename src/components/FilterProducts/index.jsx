import React from "react";

const FilterProducts = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="underline font-semibold text-2xl">Filter</h1>

        <div>
          <h2 className="mb-3 text-lg font-medium">Category</h2>
          <div className="flex flex-col gap-2">
          <button className="btn w-40" value="">
            Electronics
          </button>
          <button className="btn w-40" value="">
            Clothes
          </button>
          <button className="btn w-40" value="">
            Men
          </button>
          </div>
        </div>

        <div>
            <div className="divider w-1/2"></div>
          <h2 className="mb-3 text-lg font-medium">Price</h2>
          <div className="flex flex-col gap-2">
          <button className="btn w-40" value="">
            Electronics
          </button>
          <button className="btn w-40" value="">
            Clothes
          </button>
          <button className="btn w-40" value="">
            Men
          </button>
          </div>
        </div>
    </div>
  );
};

export default FilterProducts;
