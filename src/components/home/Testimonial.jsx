"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
        <div className="mt-[150px]">
            {/* Header */}
              <div className="lg:w-[580px] mx-auto text-center">
        <h3 className="text-xl rounded-lg highlight highlight_bg w-[147px] h-8 mx-auto">
         Testimonial
        </h3>
        <h3 className="lg:text-[48px] text-[32px] font-bold">What Our Customers Say</h3>
        <p className="text-center">
          Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:
        </p>
      </div>

      {/* slider */}
        <Slider {...settings} className="lg:w-[1013px] w-[350px] mx-auto px-4 lg:px-0">
      
      {/* div 1 */}
      <div className="lg:h-[533px] w-full mt-[74px] px-1 lg:px-0">
        <div className="lg:flex justify-between items-center">
            <div>
            <img src="/image/farmer1.jpg" className="h-[396px] w-[287px] rounded-[200px] object-cover mx-auto mb-6 lg:mb-0" alt="customer"/>
            
        </div>
       
            <div className="lg:p-8 p-4 rounded-[24px] bg-[#f4f6f6] mb-5 lg:mb-0">
                <div className="lg:w-[579px] flex flex-col ">
                  <span className="lite_font text-xl">"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</span>
                <span className="lite_font text-xl mt-8"><span className="text-[#212337] font-[400px]">Jane Doe</span> - Professional chef</span>
                </div>
            </div>
        </div>
        

      </div>

        {/* div 2 */}
       <div className="lg:h-[533px] w-full mt-[74px] px-1 lg:px-0">
        <div className="lg:flex justify-between items-center">
            <div>
            <img src="/image/farmer2.jpg" className="h-[396px] w-[287px] rounded-[200px] object-cover mx-auto mb-6 lg:mb-0" alt="customer"/>
            
        </div>
       
             <div className="p-8 rounded-[24px] bg-[#f4f6f6] mb-5 lg:mb-0">
                <div className="lg:w-[579px] flex flex-col ">
                  <span className="lite_font text-xl">"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</span>
                <span className="lite_font text-xl mt-8"><span className="text-[#212337] font-[400px]">Jane Doe</span> - Professional chef</span>
                </div>
            </div>
        </div>


        

        
        

      </div>

      <div className="lg:h-[533px] w-full mt-[74px] px-1 lg:px-0">
        <div className="lg:flex justify-between items-center">
            <div>
            <img src="/image/farmer3.jpg" className="h-[396px] w-[287px] rounded-[200px] object-cover mx-auto mb-6 lg:mb-0" alt="customer"/>
            
        </div>
       
             <div className="p-8 rounded-[24px] bg-[#f4f6f6] mb-5 lg:mb-0">
                <div className="lg:w-[579px] flex flex-col ">
                  <span className="lite_font text-xl">"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</span>
                <span className="lite_font text-xl mt-8"><span className="text-[#212337] font-[400px]">Jane Doe</span> - Professional chef</span>
                </div>
            </div>
        </div>


        

        
        

      </div>


      
    </Slider> 
        </div>
    );
};

export default Testimonial;