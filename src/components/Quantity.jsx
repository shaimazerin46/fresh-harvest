// "use client";

// import { useState } from "react";


// const Quantity = () => {
//     const [quantity, setQuantity]=useState(1)

//     return ( 
//        <div className="flex items-center ">
//                         <span>Quantity</span>
//                         <span className="text-2xl  border-[1px] border-gray-200 px-5" onClick={()=>setQuantity(q=>Math.max(1,q-1))}>
//                             -
//                         </span>
//                        <input
//                        value={quantity}
//                        onChange={()=>setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                         type="" className="input w-8  text-center hover:outline-none focus:outline-none border-[1px] border-gray-200 px-5" 
//                         />
                        
//                         <span  className="text-2xl border-[1px] border-gray-200 px-5" onClick={()=>setQuantity(q=>Math.max(1,q+1))}>
//                             +
//                         </span>

//                     </div>
//     );
// };

// export default Quantity;

"use client";

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Quantity = () => {
    const [quantity, setQuantity]=useState(1)

    return (
       <div className="flex items-center my-5">
                        <span className="font-bold rubik text-lg">Quantity </span>
                        <button className="border-[1px] ml-2 border-gray-200 text-2xl px-5 " onClick={()=>setQuantity(q=>Math.max(1,q-1))}>
                            -
                        </button>
                       <input
                       value={quantity}
                       onChange={()=>setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        type="" className="input h-[34px] w-[50px] border-[1px] border-gray-200 text-2xl text-center hover:outline-none focus:outline-none" 
                        />
                        
                        <button  className="border-[1px] border-gray-200 text-2xl px-5" onClick={()=>setQuantity(q=>Math.max(1,q+1))}>
                            +
                        </button><span className="ml-1 text-lg questrial">/kg</span>

                    </div>
    );
};

export default Quantity;