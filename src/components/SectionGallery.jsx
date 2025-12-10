import React, { useState } from 'react'

const images = [
  '/src/assets/gallery1.jpg',
  '/src/assets/gallery2.jpg',
  '/src/assets/gallery3.jpg',
  '/src/assets/gallery4.jpg'
]

export default function SectionGallery(){
  const [idx,setIdx] = useState(0)
  return (
    <div className="container mx-auto px-6 py-12">
      <h3 className="text-2xl text-center mb-6">Gallery</h3>
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <img src={images[idx]} alt="g" className="w-full h-[480px] object-cover rounded-lg" />
          <button onClick={()=>setIdx((idx-1+images.length)%images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/40 p-3 rounded-full">‹</button>
          <button onClick={()=>setIdx((idx+1)%images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/40 p-3 rounded-full">›</button>
        </div>

        <div className="mt-3 flex gap-3 justify-center">
          {images.map((s,i)=> (
            <button key={s} onClick={()=>setIdx(i)} className={`w-20 h-20 overflow-hidden rounded-md ${i===idx? 'ring-4 ring-rose-200': ''}`}>
              <img src={s} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}