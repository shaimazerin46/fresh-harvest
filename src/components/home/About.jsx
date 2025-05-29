import Image from "next/image";
import { FaCanadianMapleLeaf } from "react-icons/fa";


const About = () => {
    return (
        <div className="flex mt-[170px] items-center px-[120px] justify-between">
            <div className="relative" >
                <Image src='/image/man.png' alt="a man with vegetables" width={684} height={570}></Image>
               
                    <div className="font-bold rounded-lg highlight absolute flex items-center gap-1 rounded-xl text-[39px] bg-white p-4 right-40 bottom-40" >
                        <FaCanadianMapleLeaf />
                        <p className="text-black">Fresh Harvest</p>
                    </div>

                    <div className="absolute p-[6px] h-[192px] w-[150px] bg-white right-25 -bottom-10 rounded-xl">
                        <img src="/image/latus.jpg" alt="" className="w-[106] h-[106] object-cover mx-auto"/>
                        <h3 className="text-[9.6px] text-center">Mushroom</h3>
                        <span className="text-[9.6px] text-center lite_font">$2.3/kg</span>
                        <button className="px-11 py-1 flex justify-center items-center border-[1px] border-gray-200 text-[9.6px] left-40">Add to cart</button>

                    </div>
                
            </div>

            <div className="w-[461px]">
                <h3 className='text-xl highlight highlight_bg w-[108px] h-8 text-center'>About us</h3>
                <h3 className='text-[48px] my-5 font-[500px]'>About fresh harvest</h3>
                <p className="lite_font">Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
                <button className="py-3 mt-4 w-[154px] text-center rounded-xl border-[1px] text-[#FF6A1A] border-[#FF6A1A] text-[18px]">Read More</button>
            </div>

        </div>
    );
};

export default About;