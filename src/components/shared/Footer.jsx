import { FaApple, FaCanadianMapleLeaf, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";



const Footer = () => {
    return (
        <div className="mt-[150px] lg:px-[120px] relative px-4 bg-[#F4F6F6] pt-[64px]">

            <div className=" grid lg:grid-cols-2  grid-cols-1 lg:gap-0 gap-5">
                {/* col 1 */}
                <div>
                    <div className="font-bold highlight flex items-center gap-1 text-[39px]" href='/'>
                        <span className="text-[52px]"> <FaCanadianMapleLeaf /></span>
                        <span className="text-black text-2xl">Fresh Harvests</span>
                    </div>
                </div>

                {/* col 2 */}
                <div className="flex justify-between">
                    <div>
                        <ul className="text-[14px] lite_font space-y-3 questrial">
                            <li className="text-lg  font-bold rubik text-black">Quick links 1</li>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Detail Blog</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="text-[14px] lite_font space-y-3 questrial">
                            <li className="text-lg  font-bold rubik text-black">Quick links 2</li>
                            <li>Favorites</li>
                            <li>Cart</li>
                            <li>Sign in</li>
                            <li>Register</li>

                        </ul>
                    </div>


                    <div>
                        <ul className="text-[14px]  lite_font space-y-3 questrial">
                            <li className="text-lg font-bold  rubik text-black">Contact us</li>
                            <li className="flex items-center gap-1"><CiPhone /> 1234 5678 90</li>

                            <li className="flex items-center gap-1"><MdOutlineEmail />Freshharvests@gmail.com</li>
                            <li className="flex items-center gap-1"><CiLocationOn />Tanjung Sari Street, Pontianak, Indonesia</li>

                        </ul>
                    </div>

                </div>

            </div>

            {/* download section */}

              <div className='lg:mt-[25px] absolute mt-[105px]'>
                                    <span className='lite_font font-bold text-xs rubik'>Download APP:</span>
                                    <div className='mt-[12px] flex gap-4'>
                                        <div className='w-[139px] p-[3px] h-[45px] flex items-center bg-black text-white rounded-lg'>
                                            <span className='text-2xl mr-1'><FaApple /></span>
                                            <div className='flex flex-col'>
                                                <span className='text-[10px]'>Download on the </span>
                                                <span className='text-lg'>Apple Store</span>
                                            </div>
                                        </div>
            
                                        <div className='w-[139px] p-[3px] h-[45px] flex items-center bg-black text-white rounded-lg'>
                                            <span className='mr-1'>
                                                <img src="https://img.icons8.com/?size=48&id=L1ws9zn2uD01&format=png" alt="" className='w-6'/>
                                            </span>
                                            <div className='flex flex-col'>
                                                <span className='text-[10px]'>Get it on</span>
                                                <span className='text-lg'>Google Play</span>
                                            </div>
                                        </div>
                                    </div>
            
            </div>

                                {/* Payment section */}
            <div className="absolute lg:right-[150px] mt-5 lg:mt-0">
                <span className="text-xs rubik mb-3 font-bold  text-black">Accepted Payment Methods:</span>
                <div className="flex w-[229px] justify-between">
                    <img src="https://img.icons8.com/?size=50&id=1429&format=png" alt="" className="w-[70px]"/>
                    <img src="https://img.icons8.com/?size=80&id=hoRdvfFbBt2g&format=png" alt="" className="w-[70px]"/>
                    <img src="https://img.icons8.com/?size=50&id=39409&format=png" alt="" className="w-[70px]"/>

                </div>

            </div>

            {/* copywrite */}
            <div className="flex justify-between lg:mt-[150px] items-center pb-[33px] mt-[200px]">
                <span className="rubik text-xs font-bold">© Copyright 2024, All Rights Reserved by Banana Studio</span>
                <div className="flex w-[124px] justify-between text-[32px] text-black">
                    <AiFillTwitterCircle />
                    <FaFacebook />
                    <FaInstagramSquare />
                    

                </div>

            </div>
        </div>
    );
};

export default Footer;