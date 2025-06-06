

const Offer = () => {
    return (
        <div
        style={{backgroundImage: `url('image/offer.jpg')`,
            backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
        }}
         className="mt-[150px] py-[90px] bg-[#f7f6f6] px-4 lg:px-[120px] flex items-center flex-col lg:flex-row ">
            <div className="lg:w-[835px] space-y-3 ">
                 <h3 className='text-xl rounded-lg highlight highlight_bg w-[143px] h-8 text-center lg:mt-0 mx-auto lg:mx-0'>Special Offer</h3>
                 <h3 className="lg:text-[80px] text-[48px] font-bold text-center lg:text-left">Seasonal Fruit Bundle</h3>
                 <h3 className="lg:text-[48px] text-[32px] font-bold lg:text-left text-center">Discount up to <span className="text-[#FF6A1A]">80% OFF</span></h3>
                 <div className="flex justify-between lg:w-[464px]">
                    <div className="lg:h-[122px] lg:px-0 px-5 lg:w-[98px] shadow-lg flex flex-col justify-center items-center bg-white">
                        <h3 className="lg:text-[40px] text-[28px]">03</h3>
                        <p  className="text-[18px]">Days</p>
                    </div>
                     <div className="lg:h-[122px] lg:px-0 px-5 lg:w-[98px] bg-white shadow-lg flex flex-col justify-center items-center">
                        <h3 className="lg:text-[40px] text-[28px]">18</h3>
                        <p  className="text-[18px]">Hour</p>
                    </div>
                     <div className="lg:h-[122px] lg:px-0 px-5 lg:w-[98px] bg-white shadow-lg flex flex-col justify-center items-center">
                        <h3 className="lg:text-[40px] text-[28px]">54</h3>
                        <p  className="text-[18px]">Min</p>
                    </div>
                     <div className="lg:h-[122px] lg:px-0 px-5 lg:w-[98px] bg-white shadow-lg flex flex-col justify-center items-center">
                        <h3 className="lg:text-[40px] text-[28px]">21</h3>
                        <p  className="text-[18px]">Second</p>
                    </div>
                 </div>
                 <h3 className='uppercase h-[70px] w-[313px] flex items-center justify-center mx-auto lg:mx-0 bg-green-600 mt-[32px] text-white rounded-3xl text-[32px] font-bold'><span>code : </span> <span className='text-yellow-300 flex items-center'> fresh28</span></h3>
            </div>
            <div className="hidden lg:block bottom-0 right-0">
                <img src="/image/fruit.png" className="w-[627px] object-cover" alt=""/>
            </div>

            
        </div>
    );
};

export default Offer;