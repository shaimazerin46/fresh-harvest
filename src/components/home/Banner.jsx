import Image from 'next/image';
import React from 'react';
import { FaApple } from 'react-icons/fa';

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: 'url(/image/bg.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover' 
            }}
            className='object-cover lg:h-[1000px] lg:w-full lg:px-[120px] px-4  relative'>


                <div className='pt-[178px] lg:w-[660px] relative'>
                    <div className='space-y-5 w-full'>
                        <h3 className='text-xl highlight highlight_bg w-[266px] h-8 rounded-lg text-center'>Welcome to fresh harvest</h3>
                    <h3 className='lg:text-[80px] font-bold text-[48px] '>Fresh Fruits and Vegetables</h3>
                    <p className='text-sm lite_font'> At fresh harvest, we are passionate about providing you with the freshest and most flavoutful fruits and vegetables</p>
                    <button className='py-4 px-8 bg-[#FF6A1A] mt-10 text-white rounded-lg text-lg font-[600px]'>Shop now</button>
                    </div>

                    <div className='mt-5 ml-10 lg:ml-0 lg:absolute lg:right-0 '>
                        <div>

                        </div>
                        <div className='flex items-center gap-1  bg-[#EBEBEB] lg:px-4 px-2 lg:py-2 py-1 w-[190px] lg:w-[331px] h-[91px] lg:h-[157px] rounded-xl '>
                            <div className='font-bold space-y-[3px]'>
                                <h3 className='highlight text-sm'>Special offer</h3>
                                <h3 className='lg:text-[28px] text-[16px] font-[500px]'>Fresh salad</h3>
                                <h3 className='highlight text-[9px] lg:text-[16px]'>Up to <span className='text-black lg:text-2xl text-xs'>70% </span><span className='text-black'>off</span></h3>
                                <h3 className='uppercase h-[15px] lg:h-[26px] flex items-center justify-center bg-green-600  text-white rounded-3xl text-[6px] lg:text-[12px] font-bold'>code:<span className='text-yellow-300'>fresh25</span></h3>

                            </div>
                            <div>
                                <img src="/image/veg.png" alt='vegetables' className='h-[84px] lg:h-[146px] w-[86px] lg:w-[149px] object-cover'></img>
                            </div>
                        </div>

                    </div>

                    <div className='mt-[25px] absolute lg:-bottom-64 -bottom-[700px]'>
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

                <div className='lg:absolute bottom-0 right-0' >
                    <img className='object-cover w-full flex justify-end' src={"/image/girl.png"} ></img>
                </div>
        </div>
    );
};

export default Banner;