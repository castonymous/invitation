import React, { useState } from 'react'

export default function FloatingMusic({audioRef}){
  const [playing,setPlaying] = useState(false)

  function toggle(){
    try{
      if(!audioRef) return
      if(playing){ audioRef.pause(); setPlaying(false) }
      else { audioRef.play(); setPlaying(true) }
    }catch(e){ console.warn(e) }
  }

  return (
    <button onClick={toggle} className="fixed right-6 bottom-24 w-14 h-14 bg-black/80 text-white rounded-full flex items-center justify-center z-40 shadow-lg">
      {playing ? '▮▮' : '▶'}
    </button>
  )
}