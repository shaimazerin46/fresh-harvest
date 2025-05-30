"use client"
import Link from "next/link";
import { FaCanadianMapleLeaf, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { CiSquareCheck } from "react-icons/ci";
import { registerUser } from "@/app/actions/auth/registerUser";
import { signIn} from "next-auth/react"
import { useRouter } from "next/navigation";



const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
   const router = useRouter();

 const handleLogin = async (e) => {
  
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, 
    });

    if (res.ok) {
      alert("Login successful!");
      form.reset(); 
      setIsModalOpen(false); 
      router.push("/");
    } else {
      alert("Invalid credentials!");
    }
  } catch (error) {
    alert("Login failed. Try again.");
  }
};


  const handleRegister = async (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;

  try {
    const res = await registerUser({ name, email, password });

    if (res?.success) {
      alert("Registration successful!");
      form.reset(); 
      setIsRegisterOpen(false); 
      setIsLoginOpen(true); 
      setIsModalOpen(false); 
      router.push("/");
    } else {
      alert("Registration failed!");
    }
  } catch (error) {
    alert("An error occurred while registering.");
  }
};

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


      <div className="flex space-x-5 lite_font lg:text-sm text-2xl lg:ml-[175px]">
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

        <button
           onClick={() => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
    setIsModalOpen(true)
  }}
          className="btn hidden lg:inline border-[1px] border-[#4A4A52] lite_font bg-transparent shadow-none"
        >
          Sign in
        </button>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50  z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-[400px] shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-[32px] font-semibold mb-4 text-center">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <label className="text-lg questrial">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded mb-5"
              />
              <label className="text-lg questrial">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded mb-5"
              />
              <button
                type="submit"
                className="w-full bg-[#FF6A1A] text-white py-2 rounded"
              >
                Login
              </button>
              <div className="flex justify-between">
                <span className="text-xs flex items-center gap-1"><span className="text-[#FF6A1A]"><CiSquareCheck /></span> Remember me</span>
                <span className="text-xs">Forgot Password</span>
              </div>
              <div className="divider text-sm">Or Sign in with</div>

              <div className="flex justify-between">
                <button className="py-3 px-7 border-[1px] border-[#D9D9D9] flex items-center gap-1 text-xl font-bold rounded-lg">
                  <img src="https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png" alt="" className="w-5" />
                  Google
                </button>
                <button className="py-3 px-7 border-[1px] border-[#D9D9D9] flex items-center gap-1 text-xl font-bold rounded-lg">
                  <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" className="w-5" />
                  Facebook
                </button>
              </div>
              <h3 className="text-sm text-center">
                Don’t have an account? <span onClick={() => {
                  setIsLoginOpen(false);
                  setIsModalOpen(false);;
                  setIsRegisterOpen(true);
                }} className="text-[#FF6A1A]">Sign up</span>
              </h3>
            </form>
          </div>
        </div>
      )}

      {/* registration */}
      {isRegisterOpen && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg w-[400px] shadow-lg relative">
      <button
        onClick={() => setIsRegisterOpen(false)}
        className="absolute top-2 right-2 text-xl font-bold"
      >
        ✕
      </button>
      <h2 className="text-[32px] font-semibold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <label className="text-lg questrial">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded mb-5"
        />
        <label className="text-lg questrial">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded mb-5"
        />
        <label className="text-lg questrial">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          className="w-full px-4 py-2 border rounded mb-5"
        />
        <button
          type="submit"
          className="w-full bg-[#FF6A1A] text-white py-2 rounded"
        >
          Register
        </button>

        <div className="divider text-sm">Or Sign up with</div>

        <div className="flex justify-between">
          <button className="py-3 px-7 border-[1px] border-[#D9D9D9] flex items-center gap-1 text-xl font-bold rounded-lg">
            <img src="https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png" alt="" className="w-5" />
            Google
          </button>
          <button className="py-3 px-7 border-[1px] border-[#D9D9D9] flex items-center gap-1 text-xl font-bold rounded-lg">
            <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" className="w-5" />
            Facebook
          </button>
        </div>

        <h3 className="text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-[#FF6A1A] cursor-pointer"
            onClick={() => {
              setIsRegisterOpen(false);
              setIsLoginOpen(true);
            }}
          >
            Login
          </span>
        </h3>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default Navbar;