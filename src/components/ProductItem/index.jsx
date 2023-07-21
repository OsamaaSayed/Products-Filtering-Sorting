import React from "react";

const ProductItem = ({
  brand,
  cateogry,
  descreiption,
  images,
  price,
  rating,
  title,
}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <a className="w-full" href="" target="_blank">
          <img
            loading="lazy"
            className="w-full h-96 object-cover transition-all duration-500 ease-in-out hover:scale-105"
            src={images[0]}
            alt=""
          />
        </a>
      </figure>
      <div className="card-body">
        <div className="card-actions">
          <div className="self-center flex-1">
            <a
              href=""
              target="_blank"
              className="font-semibold text-base block hover:underline"
            >
              {title}
            </a>
            <span>${price}</span>
          </div>
          <div className="flex justify-center items-center gap-1 self-center">
            <span>{rating}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="yellow"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
