import React from "react";

const SortProducts = ({ sortByPrice }) => {
  return (
    <div>
      <select
        onChange={(e) => sortByPrice(e.target.value)}
        className="select select-bordered w-full max-w-xs"
        name="sort-by"
      >
        <option selected disabled value="">
          Sorty by
        </option>
        <option value="lowest">Price(Lowest)</option>
        <option value="highest">Price(Highest)</option>
      </select>
    </div>
  );
};

export default SortProducts;
