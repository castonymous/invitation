import React from 'react'

export default function SectionEvent(){
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-xl mx-auto bg-rose-50 p-8 rounded-2xl text-center">
        <h4 className="text-3xl font-script mb-4">Akad Nikah</h4>
        <p>Sabtu, 27-July-2024 · 08.00 WIB</p>
        <p className="mt-6">Jl. BB Yahya, Dusun Rahmat, Kp. Jawa Baru</p>

        <div className="my-8">
          <h4 className="text-3xl font-script mb-4">Resepsi</h4>
          <p>Sabtu, 27-July-2024 · 11.00 WIB</p>
          <p className="mt-4">Jl. BB Yahya, Dusun Rahmat, Kp. Jawa Baru</p>
        </div>

        <button className="mt-6 bg-rose-600 text-white px-6 py-2 rounded-full">Buka Lokasi</button>
      </div>
    </div>
  )
}