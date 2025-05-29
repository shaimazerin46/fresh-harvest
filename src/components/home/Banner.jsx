import Image from 'next/image';
import React from 'react';
import { FaApple } from 'react-icons/fa';

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: 'url(/image/banner.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover' 
            }}
            className='object-cover w-full px-[120px]  relative'>


                <div className='pt-[182px] w-[660px] pb-[172px]'>
                    <div className='space-y-5 w-full'>
                        <h3 className='text-xl highlight highlight_bg w-[266px] h-8 text-center'>Welcome to fresh harvest</h3>
                    <h3 className='text-[80px] font-[500px]'>Fresh Fruits and Vegetables</h3>
                    <p className='text-sm lite_font'> At fresh harvest, we are passionate about providing you with the freshest and most flavoutful fruits and vegetables</p>
                    <button className='py-4 px-8 bg-[#FF6A1A] mt-10 text-white rounded-lg text-lg font-[600px]'>Shop now</button>
                    </div>

                    <div className='grid grid-cols-2 mt-5'>
                        <div>

                        </div>
                        <div className='flex items-center gap-1  bg-[#EBEBEB] px-4 py-2 w-[331px] h-[157px] rounded-xl'>
                            <div className='font-bold space-y-[3px]'>
                                <h3 className='highlight text-sm'>Special offer</h3>
                                <h3 className='text-[28px] font-[500px]'>Fresh salad</h3>
                                <h3 className='highlight text-[16px]'>Up to <span className='text-black text-2xl'>70% </span><span className='text-black'>off</span></h3>
                                <h3 className='uppercase h-[26px] flex items-center justify-center bg-green-600  text-white rounded-3xl text-[12px] font-bold'>code:<span className='text-yellow-300'>fresh25</span></h3>

                            </div>
                            <div>
                                <Image src="/image/veg.png" alt='vegetables' width={149} height={146}></Image>
                            </div>
                        </div>

                    </div>

                    <div className='mt-[25px]'>
                        <p className='lite_font'>Download APP:</p>
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

                    <div>

                    </div>
                </div>

                <div className='absolute bottom-0 right-0' >
                    <img className='object-cover w-full flex justify-end' src={"/image/girl.png"} ></img>
                </div>
        </div>
    );
};

export default Banner;