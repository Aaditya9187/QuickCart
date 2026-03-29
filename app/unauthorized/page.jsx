'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function Unauthorized() {

const router = useRouter();

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 sm:px-6 animate-fadeIn">

  <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 max-w-md sm:max-w-lg w-full text-center border border-gray-200 animate-slideUp">

    {/* Icon */}
    <div className="flex justify-center mb-6">
      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-orange-100 animate-bounce">
        <span className="text-2xl sm:text-3xl">🚫</span>
      </div>
    </div>

    {/* Heading */}
    <h1 className="text-2xl sm:text-3xl font-bold text-black mb-3">
      Unauthorized Access
    </h1>

    {/* Message */}
    <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
      Sorry, you do not have permission to view this page.
      If you believe this is a mistake, please contact support or return to the homepage.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

      <button
        onClick={() => router.push("/")}
        className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 hover:-translate-y-1 transform transition duration-300 shadow-md"
      >
        Go to Home
      </button>

      <button
        onClick={() => router.back()}
        className="w-full sm:w-auto px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-black hover:-translate-y-1 transform transition duration-300 shadow-md"
      >
        Go Back
      </button>

    </div>

    {/* Footer note */}
    <p className="text-xs sm:text-sm text-gray-400 mt-8">
      QuickCart Security System
    </p>

  </div>

  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeIn {
      animation: fadeIn 0.8s ease-in-out;
    }

    .animate-slideUp {
      animation: slideUp 0.8s ease-out;
    }
  `}</style>

</div>

);
}
