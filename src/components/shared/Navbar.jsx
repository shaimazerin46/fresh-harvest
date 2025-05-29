import Link from "next/link";
import { FaCanadianMapleLeaf, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const menu = <>
   <Link href='/'><p>Home</p></Link>
   <Link href='/'><p>Shop</p></Link>
   <Link href='/'><p>About us</p></Link>
   <Link href='/'><p>Blog</p></Link>
  </>
    return (
        <div className="flex h-[100px] items-center absolute top-0 left-0 right-0 bg-transparent lg:px-[120px] px-4 justify-between z-10">

  <div className="">
    <Link className="font-bold highlight flex items-center gap-1 text-[39px]" href='/'>
   <FaCanadianMapleLeaf />
    <span className="text-black text-[17px]">Fresh Harvest</span>
    </Link>
  </div>


  <div className="hidden lg:flex ml-[186px]">
    <ul className="menu menu-horizontal space-x-16 lite_font text-sm">
     {menu}
    </ul>
  </div>


  <div className="flex space-x-5 lite_font lg:text-sm text-2xl ml-[175px]">
    <button className="lg:flex hidden items-center gap-1">
      <FaHeart />
      Favoutite
    </button>
    <button className="flex items-center gap-1">
     <FaCartShopping />
     <span className="lg:inline hidden"> Cart</span>
    </button>
     <button className="lg:hidden flex items-center gap-1">
   <RxHamburgerMenu />
     <span className="lg:inline hidden"> Cart</span>
    </button>
    
    <button className="btn hidden lg:inline border-[1px] border-[#4A4A52] lite_font bg-transparent shadow-none">
     Sign in
    </button>
  </div>


</div>
    );
};

export default Navbar;