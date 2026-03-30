"use client"

import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  // Safe logout function: clears any client-side session and redirects to home
  const handleLogout = () => {
    localStorage.clear()      // clear session data if any
    sessionStorage.clear()    // optional: clear session storage
    window.location.href = '/' // redirect to home
  }

  return (
    <div className="flex items-center px-4 md:px-8 py-3 justify-between border-b bg-white shadow-sm">
      {/* Logo */}
      <Image
        onClick={() => router.push('/')}
        className="w-28 lg:w-32 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm transition-colors"
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar