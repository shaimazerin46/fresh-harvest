import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Product from "@/components/home/Product";
import Image from "next/image";

export default function Home() {
  return (
   <div>
   <Banner></Banner>
   <Product></Product>
   <About></About>
   </div>
  );
}
