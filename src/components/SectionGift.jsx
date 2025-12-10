import React from 'react'

export default function SectionGift(){
  function copyAcc(){
    navigator.clipboard.writeText('1171028944')
  }
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h3 className="text-2xl mb-6">Weddinggift</h3>
      <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow">
        <img src="/src/assets/bsi-logo.png" className="mx-auto w-36" />
        <p className="mt-6 text-2xl font-semibold">1171028944</p>
        <p className="text-sm text-gray-500">a.n. Raina Danica</p>
        <button onClick={copyAcc} className="mt-6 bg-rose-600 text-white px-6 py-2 rounded-full">Copy</button>
      </div>
    </div>
  )
}