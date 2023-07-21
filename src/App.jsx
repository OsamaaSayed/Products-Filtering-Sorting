import { useEffect, useState } from "react";
import axios from "axios";

import ProductsList from "./components/ProductsList";
import SortProducts from "./components/SortProducts";
import FilterProducts from "./components/FilterProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filterByCategory = (category) => {
    console.log(category);
    const filteredProducts = products.filter((product) => {
      console.log(product.category);
      return product.category === category;
    });
    console.log(filteredProducts);
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("https://dummyjson.com/products");
        console.log(data.products);
        setProducts(data.products);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <div className="container mx-auto py-5 flex justify-between items-center border-b-2">
        <h1 className="text-5xl font-bold">Our Products</h1>
        <SortProducts />
      </div>
      <div className="container mx-auto py-20 grid grid-cols-12 gap-5">
        <div className="2xs:col-span-12 md:col-span-3">
          <FilterProducts
            filterByCategory={filterByCategory}
            setFilteredProducts={setFilteredProducts}
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
