import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";

import Offer from "@/components/home/Offer";
import Product from "@/components/home/Product";
import Testimonial from "@/components/home/Testimonial";


export default function Home() {
  return (
   <div className="overflow-x-hidden">
   <Banner></Banner>
   <Product></Product>
   <About></About>
   <Offer></Offer>
   <Testimonial></Testimonial>
   <Blog></Blog>
  
   </div>
  );
}
