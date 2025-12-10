import React from 'react'

export default function Cover({onOpen}){
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative p-6">
      <div className="max-w-md w-full text-center bg-[url('/src/assets/cover-bg.png')] bg-cover rounded-3xl p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-widest text-rose-500">The Wedding of</p>
        <h2 className="text-4xl font-serif my-6">Raina & Fikar</h2>
        <p className="text-sm text-gray-600">Sabtu, 27 July 2024</p>

        <button onClick={onOpen} className="mt-8 inline-flex items-center gap-3 bg-rose-600 text-white px-6 py-3 rounded-full">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block"><path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          Buka Undangan
        </button>
      </div>
    </div>
  )
}