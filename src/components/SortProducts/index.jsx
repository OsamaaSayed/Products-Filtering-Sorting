import React from "react";

const SortProducts = () => {
  return (
    <div>
      <select className="select select-bordered w-full max-w-xs" name="sort-by" id="">
        <option selected disabled value="">Sorty by</option>
        <option value="lowest">Price(Lowest)</option>
        <option value="highest">Price(Highest)</option>
      </select>
    </div>
  );
};

export default SortProducts;
