import React, { useState, useRef, useEffect } from 'react'
import Cover from './components/Cover'
import NavbarFixed from './components/NavbarFixed'
import FloatingMusic from './components/FloatingMusic'
import SectionCouple from './components/SectionCouple'
import SectionEvent from './components/SectionEvent'
import SectionGallery from './components/SectionGallery'
import SectionGift from './components/SectionGift'
import SectionRSVP from './components/SectionRSVP'
import Footer from './components/Footer'

export default function App(){
  const [opened, setOpened] = useState(false)
  const audioRef = useRef(null)

  useEffect(()=>{
    audioRef.current = new Audio('/src/assets/music.mp3')
    audioRef.current.loop = true
  },[])

  return (
    <div className="min-h-screen bg-rose-50 text-rose-900">
      {!opened ? (
        <Cover onOpen={()=>setOpened(true)} />
      ) : (
        <main className="relative">
          <NavbarFixed />
          <FloatingMusic audioRef={audioRef.current} />

          <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="container px-6 py-12">
              <h1 className="text-5xl font-serif">Fikar & Raina</h1>
            </div>
          </section>

          <section id="couple" className="py-12 bg-white">
            <SectionCouple />
          </section>

          <section id="event" className="py-12 bg-rose-50">
            <SectionEvent />
          </section>

          <section id="gallery" className="py-12 bg-white">
            <SectionGallery />
          </section>

          <section id="gift" className="py-12 bg-rose-50">
            <SectionGift />
          </section>

          <section id="rsvp" className="py-12 bg-white">
            <SectionRSVP />
          </section>

          <section id="thanks" className="py-12 bg-rose-50">
            <Footer />
          </section>
        </main>
      )}
    </div>
  )
}