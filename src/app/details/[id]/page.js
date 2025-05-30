"use client";

import Quantity from "@/components/Quantity";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHeart, IoMdStar } from "react-icons/io";

function DetailsPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState(null);
  const { id } = useParams();

 useEffect(() => {
  const fetchData = async () => {
    try {
      const [productRes, categoryRes, productsRes] = await Promise.all([
        fetch(`/api/v1/products/${id}`),
        fetch("/api/v1/category"),
        fetch("/api/v1/products"),
      ]);

      if (!productRes.ok || !categoryRes.ok || !productsRes.ok) {
        throw new Error("Failed to fetch one or more resources");
      }

      const productData = await productRes.json();
      const categoryData = await categoryRes.json();
      const productsData = await productsRes.json();

      setItem(productData.data);
      setCategories(categoryData.data);
      setProducts(productsData.data.slice(0, 4));
    } catch (error) {
      // Important: this triggers the global error.js file in App Router
      throw error;
    }
  };

  fetchData();
}, [id]);


  const getCategoryNameById = (id) => {
    const category = categories.find((cat) => cat._id === id);
    return category ? category.name : "Unknown Category";
  };

  return (
    <div className="pt-[132px] lg:px-[120px] px-4 overflow-x-hidden">
      {/* Details Section */}
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
          {/* <Image
            src={item?.images[0]}
            width={566}
            height={566}
            alt="product image"
            className="object-cover w-[300px] lg:h-[500px] lg:w-[400px]  flex justify-center mx-auto"
          /> */}
          <img src={item?.images[0]} alt="" className="object-cover  lg:h-[500px] lg:w-[400px]  flex justify-center mx-auto"/>
        </div>
        <div className="lg:w-[588px] mt-15 lg:mt-0 mx-auto">
          <div className="space-y-5">
            <h3 className="text-xl highlight highlight_bg px-3 rounded-lg text-center inline py-2 lg:mt-0 mt-15 ">
              {getCategoryNameById(item?.categoryId)}
            </h3>
            <h2 className="lg:text-[48px] text-[32px] lg:mt-0 mt-5 font-bold">{item?.productName}</h2>
            <div className="flex gap-3 items-center">
              <div className="flex gap-1 text-xl text-[#FFB848]">
                {[...Array(5)].map((_, i) => (
                  <IoMdStar key={i} />
                ))}
              </div>
              <p className="text-sm">
                <span className="text-xl font-bold">5.0</span> (1 review)
              </p>
            </div>
            <span className="text-[32px] block font-bold">${item?.price}/kg</span>
            <span className="lg:text-lg text-sm">{item?.description}</span>

            <Quantity />

            <div className="lg:flex gap-5">
              <button className="py-3 text-black lg:w-[280px] rounded-xl bg-[#f4f6f6] text-[18px] flex items-center gap-1 justify-center w-full mb-5 lg:mb-0">
                <span className="text-[#D9D9D9] text-3xl">
                  <IoMdHeart />
                </span>
                Save as favorite
              </button>
              <button className="py-3 text-white lg:w-[280px] rounded-xl bg-[#FF6A1A] text-[18px] flex items-center gap-1 justify-center w-full">
                <span className="text-white text-3xl">
                  <FaCartShopping />
                </span>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Reviews Tabs */}
      <div className="mt-[64px] mb-6">
        <div className="flex flex-row gap-6">
          <button className="px-6 rounded-lg text-lg text-white py-3 bg-[#749B3F]">
            Description
          </button>
          <button className="px-6 border border-[#D9D9D9] rounded-lg text-lg text-[#D9D9D9] py-3">
            Reviews(1)
          </button>
        </div>
      </div>

      <div className="lg:w-[894px] py-[40px] lg:px-8 px-4 mx-auto bg-[#F4F6F6]">
        <span className="text-lg">{item?.description}</span>
      </div>

      {/* Related Products */}
      <div className="w-[448px] mx-auto text-center mt-[120px]">
        <h3 className="text-xl rounded-lg highlight highlight_bg w-[147px] h-8 mx-auto">
          Our Products
        </h3>
        <h3 className="lg:text-[48px] text-[32px] font-semibold">Related products</h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <div key={product.id} className="p-4 shadow-sm h-[360px] space-y-3">
            <img
              src={product.images[0]}
              alt={product.productName}
              width={258}
              height={208}
              className="w-full h-48 object-cover rounded-md mb-4 bg-[#F4F6F6]"
            />
            <h4 className="text-center text-[18px] font-bold">{product.productName}</h4>
            <p className="text-[18px] text-center">${product.price}/kg</p>
            <button className="py-3 border border-gray-200 w-full text-center hover:text-white rounded-xl hover:bg-[#FF6A1A] text-[18px]">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsPage;
