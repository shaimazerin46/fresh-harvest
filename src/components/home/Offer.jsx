

const Offer = () => {
    return (
        <div
         className="mt-[150px] h-[640px] bg-[#f7f6f6] px-[120px] flex items-center">
            <div className="w-[835px]">
                 <h3 className='text-xl highlight highlight_bg w-[143px] h-8 text-center'>Special Offer</h3>
                 <h3 className="text-[80px] font-[500px]">Seasonal Fruit Bundle</h3>
                 <h3 className="text-[48px] font-[500px]">Discount up to <span className="text-[#FF6A1A]">80% OFF</span></h3>
                 <div className="flex justify-between w-[464px]">
                    <div className="h-[122px] w-[98px] shadow-lg flex flex-col justify-center items-center">
                        <h3 className="text-[40px]">03</h3>
                        <p  className="text-[18px]">Days</p>
                    </div>
                     <div className="h-[122px] w-[98px] shadow-lg flex flex-col justify-center items-center">
                        <h3 className="text-[40px]">18</h3>
                        <p  className="text-[18px]">Hour</p>
                    </div>
                     <div className="h-[122px] w-[98px] shadow-lg flex flex-col justify-center items-center">
                        <h3 className="text-[40px]">54</h3>
                        <p  className="text-[18px]">Min</p>
                    </div>
                     <div className="h-[122px] w-[98px] shadow-lg flex flex-col justify-center items-center">
                        <h3 className="text-[40px]">21</h3>
                        <p  className="text-[18px]">Second</p>
                    </div>
                 </div>
            </div>
            <div className=" bottom-0 right-0">
                <img src="/image/fruit.png" className="w-[627px] object-cover" alt=""/>
            </div>

            
        </div>
    );
};

export default Offer;