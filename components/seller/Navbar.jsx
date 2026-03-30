"use client"

import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useClerk } from '@clerk/nextjs'

const Navbar = () => {
  const router = useRouter()
  const clerk = useClerk() // don’t destructure here
  if (!clerk) return null // avoids hook errors if Clerk isn’t ready
  const { signOut } = clerk

  const handleLogout = async () => {
    try {
      await signOut()
      router.push('/')
    } catch (err) {
      console.error('Logout failed:', err)
      alert('Logout failed. Check console.')
    }
  }

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      <Image
        onClick={() => router.push('/')}
        className='w-28 lg:w-32 cursor-pointer'
        src={assets.logo}
        alt="logo"
      />
      <button
        onClick={handleLogout}
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar