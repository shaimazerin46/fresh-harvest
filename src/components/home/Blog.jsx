import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className='mt-[150px] lg:px-[120px] px-4'>
             {/* Header */}
              <div className="w-[448px] mx-auto text-center">
        <h3 className="text-xl rounded-lg highlight highlight_bg w-[147px] h-8 mx-auto">
         Our Blog
        </h3>
        <h3 className="lg:text-[48px] text-[32px] font-semibold">Fresh Harvest Blog</h3>
        <p className="text-center">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>

      {/* blog */}
      <div className='mt-[40px] grid lg:grid-cols-3 gap-6 grid-cols-1'>
        {/* div 1 */}
            <div className=''>
                <img src="/image/veg1.jpg" alt="vegetables" className='w-full h-[260px] mb-6 rounded-[20px] object-cover'/>
                <span className='text-lg lite_font my-2'>May 23, 2024</span>
                <h3 className='text-lg  mb-4'>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h3>
                <h3 className='flex gap-1 items-center text-lg text-[#FF6A1A]'><span className='font-bold'>Read More</span> <FaArrowRight /></h3>

            </div>

              {/* div 2 */}
            <div className=''>
                <img src="/image/veg2.jpg" alt="vegetables" className='w-full h-[260px] mb-6 rounded-[20px] object-cover'/>
                <span className='text-lg lite_font my-2'>May 23, 2024</span>
                <h3 className='text-lg  mb-4'>Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"</h3>
                <h3 className='flex gap-1 items-center text-lg text-[#FF6A1A]'><span className='font-bold'>Read More</span> <FaArrowRight /></h3>

            </div>

             {/* div 3 */}
            <div className=''>
                <img src="/image/veg3.jpg" alt="vegetables" className='w-full h-[260px] mb-6 rounded-[20px] object-cover'/>
                <span className='text-lg lite_font my-2'>May 23, 2024</span>
                <h3 className='text-lg  mb-4'>The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</h3>
                <h3 className='flex gap-1 items-center text-lg text-[#FF6A1A]'><span className='font-bold'>Read More</span> <FaArrowRight /></h3>

            </div>
      </div>
        </div>
    );
};

export default Blog;