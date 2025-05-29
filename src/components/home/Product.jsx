"use client";

import { useState, useEffect } from "react";

const Product = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");

  useEffect(() => {
    fetch("/api/v1/category")
      .then((res) => res.json())
      .then((data) => {
       
        const filtered = data.data.filter(
          (cat) => cat.categoryName.toLowerCase() !== "drinksss"
        );

        
        const all = { id: "all", categoryName: "All" };
        setCategories([all, ...filtered]);
      });

    fetch("/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  const filteredProducts =
    selectedCategoryId === "all"
      ? products.slice(0, 8)
      : products.filter((product) => product.categoryId === selectedCategoryId).slice(0,8);

  return (
    <div className="mt-[200px]">
      {/* Header */}
      <div className="w-[448px] mx-auto text-center">
        <h3 className="text-xl highlight highlight_bg w-[147px] h-8 mx-auto">
          Our product
        </h3>
        <h3 className="text-[48px] font-semibold">Our Fresh Products</h3>
        <p className="text-center">
          We pride ourselves on offering a wide variety of fresh and flavourful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mt-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`py-3 px-6 rounded-xl border ${
              selectedCategoryId === cat.id
                ? "bg-[#749B3F] text-white"
                : "bg-white text-[#A6A6A6] border-[#A6A6A6]"
            }`}
            onClick={() => setSelectedCategoryId(cat.id)}
          >
            {cat.categoryName}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-3 lg:px-[120px]">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 shadow-sm h-[360px] space-y-3"
          >
            <img
              src={product.images[0]}
              alt={product.productName}
              className="w-full h-48 object-cover rounded-md mb-4 bg-[#F4F6F6]"
            />
            <h4 className="text-center text-[18px] font-bold">{product.productName}</h4>
            <p className="text-[18px] lite_font text-center">${product.price}/kg</p>
            <button className="py-3 border-[1px] border-gray-200 w-full text-center hover:text-white rounded-xl hover:bg-[#FF6A1A] text-[18px]">Add to cart</button>
            
          </div>
        ))}
      </div>

      <button className="w-[203px] mt-8 mx-auto text-center flex justify-center items-center h-[53px] border-[1px] font-bold text-[18px] text-[#FF6A1A] border-[#FF6A1A]">See all products</button>
    </div>
  );
};

export default Product;
