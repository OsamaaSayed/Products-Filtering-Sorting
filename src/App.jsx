import { useEffect, useState } from "react";
import axios from "axios";

import ProductsList from "./components/ProductsList";
import SortProducts from "./components/SortProducts";
import FilterProducts from "./components/FilterProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const allProductsPrices = products.map((product) => product.price);

  const filterByCategory = (category) => {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filteredProducts);
  };

  const filterByPrice = (price) => {
    const filteredProducts = products.filter((product) => {
      return product.price <= +price;
    });
    setFilteredProducts(filteredProducts);
  };

  const sortByPrice = (term) => {
    const sortFunc =
      term === "lowest"
        ? (a, b) => parseInt(a.price) - parseInt(b.price)
        : (a, b) => parseInt(b.price) - parseInt(a.price);

    const sortedProducts = filteredProducts.length
      ? filteredProducts.slice().sort(sortFunc)
      : products.slice().sort(sortFunc);

    filteredProducts
      ? setFilteredProducts(sortedProducts)
      : setProducts(sortedProducts);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("https://dummyjson.com/products");
        console.log(data.products);
        setProducts(data.products);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };

    getProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto min-h-screen flex justify-center items-center text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto py-5 flex 2xs:flex-col 2xs:gap-2 2xs:items-start md:flex-row md:justify-between md:items-center border-b-2">
        <h1 className="text-5xl font-bold">Our Products</h1>
        <SortProducts sortByPrice={sortByPrice} />
      </div>
      <div className="container mx-auto py-20 grid grid-cols-12 gap-5">
        <div className="2xs:col-span-12 md:col-span-3">
          <FilterProducts
            filterByCategory={filterByCategory}
            filterByPrice={filterByPrice}
            setFilteredProducts={setFilteredProducts}
            allProductsPrices={allProductsPrices}
          />
        </div>
        <div className="2xs: col-span-12 md:col-span-9 grid grid-cols-fill gap-5">
          <ProductsList
            filteredProducts={filteredProducts}
            products={products}
          />
        </div>
      </div>
    </>
  );
}

export default App;
