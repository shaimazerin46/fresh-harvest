import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import Offer from "@/components/home/Offer";
import Product from "@/components/home/Product";
import Testimonial from "@/components/home/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
   <div>
   <Banner></Banner>
   <Product></Product>
   <About></About>
   <Offer></Offer>
   <Testimonial></Testimonial>
   <Blog></Blog>
   </div>
  );
}
