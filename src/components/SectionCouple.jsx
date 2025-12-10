import React from 'react'

export default function SectionCouple(){
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow">
        <img src="/src/assets/raina.jpg" alt="raina" className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-rose-100" />
        <h3 className="mt-6 text-3xl font-script">Raina Danica S.PWK</h3>
        <p className="mt-2 text-rose-600">Putri kedua dari Bapak Razaly & Ibu Cut Junaida</p>

        <div className="my-12 text-6xl text-amber-400">&</div>

        <img src="/src/assets/fikar.jpg" alt="fikar" className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-rose-100" />
        <h3 className="mt-6 text-3xl font-script">Zulfikar M. Rizki S.Kom</h3>
        <p className="mt-2 text-rose-600">Putra kelima dari Bapak H. Zainal Arifin & Ibu Zuraidah</p>
      </div>
    </div>
  )
}