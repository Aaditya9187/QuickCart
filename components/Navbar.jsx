"use client"
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon} from "../assets/assets";
import Link from "next/link"
import { useAppContext } from "../context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  const pathname = usePathname();

  // Helper to highlight active links
  const isActive = (path) => pathname === path;

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className={`hover:text-gray-900 transition duration-200 ${isActive("/") ? "font-bold" : ""}`}>
          Home
        </Link>
        <Link href="/all-products" className={`hover:text-gray-900 transition duration-200 ${isActive("/all-products") ? "font-bold" : ""}`}>
          Shop
        </Link>
        <Link href="/aboutUs" className={`hover:text-gray-900 transition duration-200 ${isActive("/aboutUs") ? "font-bold" : ""}`}>
          About Us
        </Link>
        <Link href="/contact" className={`hover:text-gray-900 transition duration-200 ${isActive("/contact") ? "font-bold" : ""}`}>
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full hover:scale-105 hover:bg-gray-100 transition-all duration-200">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        { user 
        ? <> 
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label = "Cart" labelIcon={<CartIcon/>} onClick={()=>router.push('/cart')} />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label = "My Orders" labelIcon={<BagIcon/>} onClick={()=>router.push('/my-orders')} />
            </UserButton.MenuItems>            
          </UserButton>
         </> 
        : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Sign In / Join
        </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        { user 
        ? <> 
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label = "Home" labelIcon={<HomeIcon/>} onClick={()=>router.push('/')} />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label = "Products" labelIcon={<BoxIcon/>} onClick={()=>router.push('/all-products')} />
            </UserButton.MenuItems>                                   
            <UserButton.MenuItems>
              <UserButton.Action label = "Cart" labelIcon={<CartIcon/>} onClick={()=>router.push('/cart')} />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label = "My Orders" labelIcon={<BagIcon/>} onClick={()=>router.push('/my-orders')} />
            </UserButton.MenuItems>            
          </UserButton>
         </> 
        : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Sign In / Join
        </button>}
      </div>
    </nav>
  );
};

export default Navbar;