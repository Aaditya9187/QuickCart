"use client"

import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const [ripples, setRipples] = useState([])

  const handleLogout = (e) => {
    const rect = e.target.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const newRipple = { x, y, size, key: Date.now() }

    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== newRipple.key))
    }, 400)

    // Delay logout slightly to show ripple
    setTimeout(() => {
      localStorage.clear()
      sessionStorage.clear()
      window.location.href = '/'
    }, 200)
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

      {/* Logout Button with ripple */}
      <button
        onClick={handleLogout}
        className="relative overflow-hidden bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm transition-all"
      >
        Logout
        {/* Render ripples */}
        {ripples.map((r) => (
          <span
            key={r.key}
            className="absolute bg-white opacity-30 rounded-full animate-ripple"
            style={{
              width: r.size,
              height: r.size,
              top: r.y,
              left: r.x,
              pointerEvents: 'none',
            }}
          />
        ))}
      </button>

      {/* Ripple animation */}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.6;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 0.4s linear;
        }
      `}</style>
    </div>
  )
}

export default Navbar