'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function Unauthorized() {

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-4xl font-semibold text-red-600">Unauthorized Access</h1>
      <p className="text-gray-600 text-center max-w-md">
        You do not have permission to access this page.
      </p>

      <button
        onClick={() => router.push("/")}
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}