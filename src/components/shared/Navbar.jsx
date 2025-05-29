import Link from "next/link";
import { FaCanadianMapleLeaf, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
  const menu = <>
   <Link href='/'><p>Home</p></Link>
   <Link href='/'><p>Shop</p></Link>
   <Link href='/'><p>About us</p></Link>
   <Link href='/'><p>Blog</p></Link>
  </>
    return (
        <div className="navbar absolute top-0 left-0 right-0 bg-transparent px-[120px] z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {menu}
      </ul>
    </div>
    <Link className="font-bold highlight flex items-center gap-1 text-2xl" href='/'>
   <FaCanadianMapleLeaf />
    <p className="text-black">Fresh Harvest</p>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-16 lite_font">
     {menu}
    </ul>
  </div>
  <div className="navbar-end flex space-x-5">
    <button className="flex items-center gap-1">
      <FaHeart />
      Favoutite
    </button>
    <button className="flex items-center gap-1">
     <FaCartShopping />
      Cart
    </button>
    <button className="btn border-[1px] bg-transparent">
     Sign in
    </button>
  </div>
</div>
    );
};

export default Navbar;