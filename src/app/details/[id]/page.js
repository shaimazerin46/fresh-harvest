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
    const { id } = useParams();

    console.log(id)
    const [item, setItem] = useState();
    useEffect(() => {
        fetch(`/api/v1/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data.data))

        fetch("/api/v1/category")
            .then((res) => res.json())
            .then((data) => {

                setCategories(data.data);
            });

        fetch("/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.data.slice(0,4));
            });

    }, [])
    const getCategoryNameById = (id) => {
        const category = categories?.find(cat => cat._id === id);
        return category ? category?.name : "Unknown Category";
    };
 console.log(categories)
    return (
        <div className='pt-[132px] lg:px-[120px] px-4'>

            {/* details */}

            <div className="lg:flex items-center justify-between">
                <div className="">
                   
                    <Image
                        src={item?.images[0]}
                        width={566}
                        height={566}
                        alt="vegetables"
                        className="lg:h-[500px] lg:w-[400px] object-cover mx-auto"
                    />
                    {/* )} */}
                </div>
                <div className="lg:w-[588px]">
                    <div className="space-y-5">
                        <h3 className='text-xl highlight highlight_bg px-3 rounded-lg text-center inline py-2'>
                            {getCategoryNameById(item?.id)}
                        </h3>
                        <h2 className="text-4xl text-[48px] mt-5 font-bold">{item?.productName}</h2>
                        <div className="flex gap-3 items-center">
                            <div className="flex gap-1 text-xl lite_coffee text-[#FFB848]">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>
                            <p className="text-sm secondary"><span className="text-xl font-bold">5.0 </span>(1 review)</p>
                        </div>
                        <span className="text-[32px] block rubik btn_color font-bold">${item?.price}/kg</span>
                        <span className="text-lg lite_font">{item?.description}</span>

                        <Quantity></Quantity>
                        <div className="lg:flex gap-5">
                            <button className="py-3 text-black lg:w-[280px] text-centertext-white rounded-xl bg-[#f4f6f6] text-[18px] flex items-center gap-1 justify-center w-full mb-5 lg:mb-0">
                                <span className="text-[#D9D9D9] text-3xl"> <IoMdHeart /></span>
                                Save as favorite</button>
                            <button className="py-3 text-white lg:w-[280px] text-centertext-white rounded-xl bg-[#FF6A1A] text-[18px] flex items-center gap-1 justify-center w-full">
                                <span className="text-white text-3xl"> <FaCartShopping /></span>
                                Add to cart</button>

                        </div>
                    </div>

                </div>
            </div>

            {/* description and review */}

            <div className="mt-[64px] mb-6">
                <div className="flex  flex-row gap-6">
                    <button className=" px-6 rounded-lg text-lg  text-white py-3 bg-[#749B3F]">Description</button>
                    <button className=" px-6 border-[1px] border-[#D9D9D9] rounded-lg text-lg  text-[#D9D9D9] py-3 ">Reviews(1)</button>
                </div>

            </div>

            <div className="lg:w-[894px] py-[40px] px-8 bg-[#F4F6F6]">
                <span className="text-lg lite_font">
                    {item?.description}
                </span>
            </div>

            <div className="w-[448px] mx-auto text-center mt-[120px]">
                <h3 className="text-xl rounded-lg highlight highlight_bg w-[147px] h-8 mx-auto">
                    Our Products
                </h3>
                <h3 className="lg:text-[48px] text-[32px] font-semibold">Related products</h3>

            </div>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
        
          <div key={product.id}
           
            className="p-4 shadow-sm h-[360px] space-y-3"
          >
            <img
              src={product.images[0]}
              alt={product.productName}
              width={258}
              height={208}
              className="w-full h-48 object-cover rounded-md mb-4 bg-[#F4F6F6]"
            />
            <h4 className="text-center text-[18px] font-bold">{product.productName}</h4>
            <p className="text-[18px] lite_font text-center">${product.price}/kg</p>
            <button className="py-3 border-[1px] border-gray-200 w-full text-center hover:text-white rounded-xl hover:bg-[#FF6A1A] text-[18px]">Add to cart</button>
            
          </div>
         
        ))}
      </div>

        </div>

    )
}

export default DetailsPage