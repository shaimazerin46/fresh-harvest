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
              <div className="w-[551px] mx-auto text-center">
        <h3 className="text-xl rounded-lg highlight highlight_bg w-[147px] h-8 mx-auto">
         Testimonial
        </h3>
        <h3 className="text-[48px] font-semibold">What Our Customers Say</h3>
        <p className="text-center">
          Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:
        </p>
      </div>

      {/* slider */}
        <Slider {...settings} className="w-[1013px] mx-auto">
      
      {/* div 1 */}
      <div className="h-[533px] w-full mt-[74px]">
        <div className="flex justify-between items-center">
            <div>
            <img src="/image/farmer1.jpg" className="h-[396px] w-[287px] rounded-[200px] object-cover" alt="customer"/>
            
        </div>
       
            <div className="w-[579px] flex flex-col">
                <span className="lite_font text-xl">"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</span>
                <span className="lite_font text-xl mt-8"><span className="text-[#212337] font-[400px]">Jane Doe</span> - Professional chef</span>
            </div>
        </div>
        

      </div>

        {/* div 2 */}
       <div className="h-[533px] w-full mt-[74px]">
        <div className="flex justify-between items-center">
            <div>
            <img src="/image/farmer2.jpg" className="h-[396px] w-[287px] rounded-[200px] object-cover" alt="customer"/>
            
        </div>
       
            <div className="w-[579px] flex flex-col">
                <span className="lite_font text-xl">"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</span>
                <span className="lite_font text-xl mt-8"><span className="text-[#212337] font-[400px]">Jane Doe</span> - Professional chef</span>
            </div>
        </div>


        

        
        

      </div>

      <div className="h-[533px] w-full mt-[74px]">
        <div className="flex justify-between items-center">
            <div>
            <img src="/image/farmer3.jpg" className="h-[396px] w-[287px] rounded-[200px] object-cover" alt="customer"/>
            
        </div>
       
            <div className="w-[579px] flex flex-col">
                <span className="lite_font text-xl">"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</span>
                <span className="lite_font text-xl mt-8"><span className="text-[#212337] font-[400px]">Jane Doe</span> - Professional chef</span>
            </div>
        </div>


        

        
        

      </div>


      
    </Slider> 
        </div>
    );
};

export default Testimonial;